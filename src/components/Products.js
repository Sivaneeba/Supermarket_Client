import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productService from "../services/product.service";
import ProductCart from './layout/productCart'
import { Grid,InputBase,Pagination } from '@material-ui/core'
import { styled, alpha } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const pageSizes = [6, 6, 9];

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const getRequestParams = (searchName, page, pageSize) => {
    let params = {};

    if (searchName) {
      params["name"] = searchName;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  };

  const retrieveProducts = () => {
    const params = getRequestParams(searchName, page, pageSize);
    productService.getAll(params)
      .then(response => {
        const { products, totalPages } = response.data;
        setProducts(products);
        setCount(totalPages);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(retrieveProducts, [page, pageSize]);

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

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  return (
    <div>
      <br/>
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={onChangeSearchName}
            />
          </Search> 
              {/* <input
                type="text"
                className="form-control"
                placeholder="Search by name"
                value={searchName}
                onChange={onChangeSearchName}
              /> */}
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={retrieveProducts}
                  style={{color:'white', backgroundColor:'#69A432', borderRadius:10,padding:'5px 8px 5px 8px',cursor: 'pointer'}}
                >
                  Search
                </button>

              </div>  </Grid>
          </div>
        </div>
        <div className="col-md-6">
          {/* <h4>Products List</h4> */}

          <div className="mt-3">
            {"Items per Page: "}
            <select onChange={handlePageSizeChange} value={pageSize}>
              {pageSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <Pagination
              className="my-3"
              count={count}
              page={page}
              siblingCount={1}
              boundaryCount={1}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
              color="primary"
            />
          </div>

          {/* <ul className="list-group">
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
        </ul> */}

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
                <img src={"http://localhost:8080/" + currentProduct.image} alt="name" />
              </div>
              <div>
                <label>
                  <strong>CategoryId:</strong>
                </label>{" "}
                {currentProduct.productCategoryId}
              </div>
            </div>
          ) : (
            <div>
              <br />
              {/* <p>Please click on a Product...</p> */}
            </div>
          )}
        </div>
      </div>
      <Grid container direction="row" spacing={4}>
        {products &&
          products.map((product, index) => (


            < Grid item xs={12} sm={6} md={4} lg={3} xl={3}> <ProductCart  {...product} /> </Grid>


          ))}
      </Grid>
    </div>
  );
};

export default Products;