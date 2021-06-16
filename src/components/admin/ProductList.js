import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../services/product.service";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveProducts();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveProducts = () => {
    ProductService.getAll()
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveProducts();
    setCurrentProduct(null);
    setCurrentIndex(-1);
  };

  const setActiveProduct = (product, index) => {
    setCurrentProduct(product);
    setCurrentIndex(index);
  };

  const removeAllProducts = () => {
    ProductService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    ProductService.findByName(searchName)
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const productlist = products.reduce((product, { name, price,count, productCategoryId }) => {
    if (!product[productCategoryId]) product[productCategoryId] = [];
    product[productCategoryId].push({name,count,price,productCategoryId});
    return product;
  }, {});
  console.log(productlist);

  return (
    <div>     
      <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Products List</h4>

        <ul className="list-group">
        {products &&
            products.map((product, index) => (              
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveProduct(product, index)}
                key={index}
              >
                {product.name}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllProducts}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        
        {currentProduct ? (
          <div>
            <h4>Product</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentProduct.name}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentProduct.description}
            </div> 
            <div>
              <label>
                <strong>Count:</strong>
              </label>{" "}
              {currentProduct.count}
            </div> 
            <div>
              <label>
                <strong>Price:</strong>
              </label>{" "}
              {currentProduct.price}
            </div>
            <div>
              <label>
                <strong>Image:</strong>
              </label>{" "}
              <img src={"http://localhost:8080/"+currentProduct.image}  alt="name"/>
            </div>  
            <div>
              <label>
                <strong>CategoryId:</strong>
              </label>{" "}
              {currentProduct.productCategoryId}
            </div>   

            <Link
              to={"/admin/products/" + currentProduct.id}             
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Product...</p>
          </div>
        )}
      </div>
    </div>
      
    </div>
  );
};

export default ProductList;