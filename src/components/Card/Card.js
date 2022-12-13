import React from 'react';


import './Card.css'

const Card = (props) => {
    const card =props.card;
   
   let total = 0;
   for (let x = 0; x < card.length; x++) {
    const product = card[x];
    total =total +product.price *product.quantity;

   }
   let shipping =0;
   if(total>35){
    shipping =0;
   }
   else if (total>15){
    shipping =4.00;
   }
   else if (total>0){
    shipping =12.00;
   }
 const formatNumber =(num) =>{                                                          
   let number =Math.round(num)
   let convetNumber =  number.toFixed(2);
   return convetNumber;
 }
 const grandTotal =total+shipping;
   const vat =grandTotal/10;


    return (
        <div className='card'>

            <h3>Order summary</h3>
            <h4>Items order:<small>{card.length}</small> </h4>

             
             <p>shipping & handing:<small>${shipping}</small></p>
             <p>tax & vat: <small>${formatNumber(vat)}</small></p>
             <h5>Order Total:<small>${formatNumber(grandTotal+vat)}</small></h5>
            {
              props.children
            }
            

        </div>
    );
};

export default Card;