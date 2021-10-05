import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect ,Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";
import AuthService from "./services/auth.service";
import { createBrowserHistory } from "history";

import Login from "./components/Login";
import LoginNew from "./components/Login/Login";

import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProductCategoryList from "./components/ProductCategoryList";

import ProductList from "./components/admin/ProductList";
import Product from "./components/admin/Product";
import UserList from "./components/admin/UserList";
import AddProduct from "./components/admin/AddProduct";
import CategoryList from "./components/admin/CategoryList";
import Category from "./components/admin/Category";
import AddCategory from "./components/admin/AddCategory";
import Navbar from './components/Navbar/navbar'
import Cart from "./components/user/Cart";
import Admin from './components/admin/UserDashbord/DashboardLayout'
import ProductsList from "./components/user/ProductsList";
import Products from "./components/Products";
const hist = createBrowserHistory();

const App = () => {  
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);
  // const [currentUserOnly, setCurrentUserOnly] = useState(false);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);      
  //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //     setCurrentUserOnly(user.roles.includes("ROLE_USER"));
  //   }
  // }, []);

  // const logOut = () => {
  //   AuthService.logout();
  // };

  return (
    <div>
<Navbar/>
{/* <br/> */}
      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          <img  src={Logo} alt='' style={{height:70}}/>
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>                    

          {showAdminBoard && (            
              <li className="nav-item">
                <Link to={"/admin/addCategory"} className="nav-link">
                  AddCategory
                </Link>
              </li>                         
           
          )}

        {showAdminBoard ? (
          <div className="navbar-nav ml-auto"> 
              <li className="nav-item">
                <Link to={"/admin/categories"} className="nav-link">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/addProduct"} className="nav-link">
                  AddProduct
                </Link>
              </li>             
              <li className="nav-item">
                <Link to={"/admin/products"} className="nav-link">
                  Products
                </Link>
              </li>                          
              <li className="nav-item">
                <Link to={"/admin/users"} className="nav-link">
                  Users
                </Link>
              </li>                     
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to={"/categories"} className="nav-link">
              Product Categories
            </Link>
          </li> 
          </div>
        )}
          
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
        
      </nav> */}

      <div >
        
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/categories" component={ProductCategoryList} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/profile" component={Profile} />  

          <Route exact path="/user/carts" component={Cart}/>
          <Route exact path="/user/categories/:id" component={ProductsList} />

          <Route exact path="/admin/addCategory" component={AddCategory} />          
          <Route exact path="/admin/products" component={ProductList} />
          <Route exact path="/admin/products/:id" component={Product} />
          <Route exact path="/admin/categories" component={CategoryList} />
          <Route exact path="/admin/categories/:id" component={Category} />
          <Route exact path="/admin/addProduct" component={AddProduct} />
          <Route exact path="/admin/users" component={UserList} />          
          <Route exact path="/login_new" component={LoginNew} />          
          
                  
          <Router history={hist}>
                <Switch>
                    <Route path="/Adashboard" component={Admin} />
                    <Redirect from="/d" to="/Adashboard" />                    
                </Switch>
            </Router>
        </Switch>
               
      </div>
    </div>
  );
};

export default App;