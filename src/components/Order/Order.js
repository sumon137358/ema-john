import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart,removeFromDatabaseCart,clearLocalShoppingCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import fakeData from './../../fakeData/index';
import './Order.css'
import Card from './../Card/Card';
const Order = () => {
const [cart,setCart] = useState([]);

const removedProduct =(productKey) =>{
  
    const newCart =cart.filter( pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
    
}

const handleSubmit =() =>{
  setCart([])
  clearLocalShoppingCart()
  // alert("your order has been submitted")
}


useEffect( () =>{
    const saveCart =getDatabaseCart()
  
    const productKey =Object.keys(saveCart);
    

   const productCart = productKey.map(key => {
    
    const product =fakeData.find( pd => pd.key === key)
    product.quantity = saveCart[key]
    return product;
   })

    setCart(productCart)

   
},[])


    return (
        <div className='order-container'>
          <div className='review-product'>
          {

            cart.map(pd => <ReviewItem key={pd.key} removedProduct ={removedProduct}  product={pd}></ReviewItem>)
            }
          </div>
          <div className="order-summary">
          <Card card={cart}>
            <button onClick={handleSubmit} className='main-button'> submit order</button>
          </Card>
          </div>

         
        </div>
    );
};

export default Order;