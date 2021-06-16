import React, { useState, useEffect } from "react";
import ProductService from "../../services/product.service";

const Product = props => {
  
  const initialProductState = {
    id: null,
    name: "",
    description: "",
    price: 0,
    count: 0,
    productCategoryId: 0    
  };
  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");

  const getProduct = id => {
    ProductService.get(id)
      .then(response => {
        setCurrentProduct(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProduct(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  }; 

  const updateProduct = () => {
    ProductService.update(currentProduct.id, currentProduct)
      .then(response => {
        console.log(response.data);
        setMessage("The product was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteProduct = () => {
    ProductService.remove(currentProduct.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/admin/products");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
    {currentProduct ? (
      <div className="edit-form">
        <h4>Product</h4>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={currentProduct.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={currentProduct.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="count">Count</label>
            <input
              type="text"
              className="form-control"
              id="count"
              name="count"
              value={currentProduct.count}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={currentProduct.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoryId">CategoryId</label>
            <input
              type="text"
              className="form-control"
              id="categoryId"
              name="categoryId"
              value={currentProduct.productCategoryId}
              onChange={handleInputChange}
            />
          </div>
          
        </form>
        

        <button className="badge badge-danger mr-2" onClick={deleteProduct}>
          Delete
        </button>

        <button
          type="submit"
          className="badge badge-success"
          onClick={updateProduct}
        >
          Update
        </button>
        <p>{message}</p>
      </div>
    ) : (
      <div>
        <br />
        <p>Please click on a Product...</p>
      </div>
    )}
  </div>
  );
};

export default Product;