import React from 'react';
import './ReviewIterm.css'
const ReviewItem = (props,) => {
//  console.log(props);
    const {name,img,price,key,quantity} = props.product;
   
    return (
        
        <div className='reviewStyle-container'>
           <div className="review-img">
           <img src={img} alt="" />
           </div>
           
           <div className="review-item">
           <p>name:{name}</p>
            <p>price:{price}</p>
            <p>
            quantity:{quantity}
            </p>
            <button onClick={()=>props.removedProduct(key)} className="main-button">remove</button>
            
           </div>

        </div>
    );
};

export default ReviewItem;