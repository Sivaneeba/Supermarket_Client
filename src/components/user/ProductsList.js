import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProductCart from '../layout/productCart'
import {Grid,Button} from '@material-ui/core/';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import pCategoryService from "../../services/pCategory.service";
import productService from "../../services/product.service";

const ProductsList = props => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");
  
  useEffect(() => {
    retrieveProducts(props.match.params.id);
  }, [props.match.params.id]);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveProducts = id => {
    pCategoryService.getCP(id)
      .then(response => {
        setProducts(response.data.products);
        console.log(response.data.products);
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

  const findByName = () => {
    productService.findByName(searchName)
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  let history = useHistory();

  return (
            
      <div>
        <h4>Products List</h4>

          <Grid container direction="row" spacing={4}>
          {products &&
            products.map((product, index) => (
              // <li
              //   className={
              //     "list-group-item " + (index === currentIndex ? "active" : "")
              //   }
              //   onClick={() => setActiveProduct(product, index)}
              //   key={index}
              // >
              //   {product.name}
              // </li>
          
  < Grid item xs={12} sm={6}md={6}lg={4} xl={3}> <ProductCart {...product}/> </Grid>


                         ))}
       </Grid>
        <br/>

        {/* <button  onClick={() => history.goBack()}>Back</button> */}
        <Button startIcon={<ArrowBackIcon />} onClick={() => history.goBack()} sx={{ color: 'white', fontSize: 14, fontWeight: 'small',padding:"5px 13px 5px 15px",textTransform: 'none', backgroundColor:"#07b558", m: 1}} size="small">Back</Button>

      </div>
      // { <div className="col-md-6">
      //   {currentProduct ? (
      //     <div>
      //       <h4>Product</h4>
      //       <div>
      //         <label>
      //           <strong>Name:</strong>
      //         </label>{" "}
      //         {currentProduct.name}
      //       </div>
      //       <div>
      //         <label>
      //           <strong>Description:</strong>
      //         </label>{" "}
      //         {currentProduct.description}
      //       </div> 
      //       <div>
      //         <label>
      //           <strong>Count:</strong>
      //         </label>{" "}
      //         {currentProduct.count}
      //       </div> 
      //       <div>
      //         <label>
      //           <strong>Price:</strong>
      //         </label>{" "}
      //         {currentProduct.price}
      //       </div>            

      //     </div>
      //   ) : (
      //     <div>
      //       <br />
      //       <p>Please click on a Product...</p>
      //     </div>
      //   )}
      // </div> }
    
  );
};

export default ProductsList;