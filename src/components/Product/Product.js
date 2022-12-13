import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {

  const { name, price, img, seller, stock, key } = props.product;
  return (
    <div className="product-container">
      <div className="product-left">
        <img src={img} alt="" />
      </div>
      <div className="product-right">
        <h5>
          <Link to={"/product/" + key}>{name}</Link>
        </h5>
        <br />
        <span>by:{seller}</span>
        <br />
        <p>${price}</p>
        <p>only {stock} left in stock-order soon</p>
      

     { props.addToCart ===true &&  <button className="main-button" onClick={() => props.handleProduct(props.product)}>
          {" "}
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to cart
        </button>}
      </div>
    </div>
  );
};

export default Product;
