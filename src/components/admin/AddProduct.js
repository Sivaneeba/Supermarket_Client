import React, { useState, useEffect } from "react";
import ProductService from "../../services/product.service";
import pCategoryService from "../../services/pCategory.service";

const AddProduct = () => {

  let newid;
  const initialProductState = {
    id: null,
    name: "",
    description: "",
    count: "",
    price: "",
    image:"",
    productCategoryId: 0    
  };
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [product, setProduct] = useState(initialProductState);  
  const [submitted, setSubmitted] = useState(false);
  const [categories, setCategories] = useState([]);
  const [imgData, setImgData] = useState(null);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  useEffect(() => {
    retrieveCategories();
  }, []);

  const retrieveCategories = () => {
    pCategoryService.getAll()
      .then(response => {
        setCategories(response.data);        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };  

  const handleSelectChange = (event) => {      
    newid = event.target.value;    
 }

 const saveProduct = () => {     

  let currentFile = selectedFiles[0];
  if(currentFile){
    setCurrentFile(currentFile);
    const reader = new FileReader();
    reader.onloadend = () =>{
      setImgData(reader.result);
    }
    reader.readAsDataURL(currentFile);
  }
  
    var data = {
    name: product.name,
    description: product.description,
    count: product.count,
    price: product.price,
    image: currentFile,
    productCategoryId: newid
  };

  ProductService.create(data)
    .then(response => {
      setProduct({
        id: response.data.id,
        name: response.data.name,
        description: response.data.description,
        count: response.data.count,
        price: response.data.price,
        image: response.data.image,
        productCategoryId: newid        
      });
      setSubmitted(true);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
};

const newProduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };
 
    return(
        <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProduct}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <h3>Add Product</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={product.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={product.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="count">Count</label>
            <input
              type="text"
              className="form-control"
              id="count"
              required
              value={product.count}
              onChange={handleInputChange}
              name="count"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              required
              value={product.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>

          <div className="form-group">
            {imgData ? (
              <img src={imgData} alt="view"/>
            ):(
              <label htmlFor="image">Choose Image</label>
            )
            }            
            <input
              type="file"
              className="form-control"
              id="image"
              required                           
              onChange={selectFile}
              name="image"
            />
            
          </div>          

          <div className="form-group">
            <label htmlFor="price">Category</label>
            <select onClick={handleSelectChange}>
            {categories &&
            categories.map((category, index) => (                
                <option key={index} value={category.id}>{category.name}</option>
            ))}
            </select>
            
          </div>
          <br/>
          <button onClick={saveProduct} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
    );
};

export default AddProduct;