import React, { useState,useSyncExternalStore  } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import "./Shop.css";
import Card from "./../Card/Card";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Shop = () => {
  //slice data from fakeData.
  const first10Slice = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10Slice);

  const [card, setCard] = useState([]);

  const handleProduct = (product) => {
    const sameProduct =card.find(pd => pd.key === product.key)
    let count =1;
    let newCard ;
    if(sameProduct){
       count =sameProduct.quantity + 1;
       sameProduct.quantity = sameProduct.quantity +1;
       const others =card.filter(pd => pd.key !== product.key)
       newCard =[...others,sameProduct]
    }
    else{
      product.quantity =1;
      newCard =[...card, product]

    }
    
   
    setCard(newCard);
    
   addToDatabaseCart(product.key,count)
  
  };


  useEffect( () =>{
    const saveCart =getDatabaseCart()
  
    const productKey =Object.keys(saveCart);
    

   const productCart = productKey.map(key => {
    
    const product =fakeData.find( pd => pd.key === key)
    product.quantity = saveCart[key]
    return product;
   })

    setCard(productCart)

   
},[])
  return (
    <div className="container">
      <div className="shoppingPart">
   
        {products.map((pd,index) => (
          

          <Product product={pd} addToCart ={true}  key={index}  handleProduct={handleProduct}></Product>
        ))}
      </div>
      <div className="card-part">
        <Card card={card}>
        <Link to="/Order" >
             <button className='main-button'>Review your order</button>
             </Link>
        </Card>
      </div>
    </div>
  );
};

export default Shop;
