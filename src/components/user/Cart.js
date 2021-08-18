import React, { useState, useEffect } from "react";
import authService from "../../services/auth.service";
import cartService from "../../services/cart.service";

const Cart = (props) =>{    

    const currentUser = authService.getCurrentUser();    
    let userId = currentUser.id;
    let total =0;      
    const { image,name, count, price, description, id } = props 

    const [carts, setCarts] = useState([]);
    const [currentCart, setCurrentCart] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");
    const [submitted, setSubmitted] = useState(false);  
    
   
    useEffect(() => {
        retrieveCarts(currentUser.id);
      }, [currentUser.id]);

    const retrieveCarts = (id) => {            
        cartService.get(id)
          .then(response => {
            setCarts(response.data);
            console.log(response.data);            
            
          })
          .catch(e => {
            console.log(e);
          });
      };

      const refreshList = () => {
        retrieveCarts(currentUser.id);               
      };
    
      const setActiveCart = (cart, index) => {
        setCurrentCart(cart);
        setCurrentIndex(index);
      }; 
      
      const saveCart = (cartId,quantity,productId,price) => {
        
        var data = {
          id: cartId,
          userId: userId,
          quantity: quantity + 1,
          productId: productId
        };
    
        cartService.create(data)
          .then(response => {        
            setSubmitted(true);                  
            console.log(response.data);            
            refreshList();
            
          })
          .catch(e => {
            console.log(e);
          });
      };

      const deleteCart = (productId,quantity,price) => {
       
        var data = {            
            quantity: quantity - 1,            
        };
      cartService.remove(productId,data)
      .then(response => {
        console.log(response.data);                   
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
      };   
      

    return (
        <div>
            <h1>Cart Products</h1>            
            <div className="col-md-6">
                <ul className="list-group">
                    {
                        carts.map(cart => <div>
                            <li className="list-group-item " key ={cart.id}>
                            Product Name : {cart.product.name}
                            <br/>
                            Product Price : {cart.product.price}
                            <br/>
                            Product Quantity : {cart.product.count}
                            <br/>
                            Cart Quantity : {cart.quantity}
                            &nbsp;
                            <button onClick={() => saveCart(cart.id,cart.quantity,cart.product.id,cart.product.price)}>+</button>
                            &nbsp;
                            <button onClick={() => deleteCart(cart.product.id,cart.quantity,cart.product.price)}>-</button>
                            <br/>
                            Total : {cart.product.price * cart.quantity}
                        </li>                      
                        
                        <br/>                      
                        </div>)
                    }
                   
                </ul>
            </div>
        </div>
    )
};

export default Cart
