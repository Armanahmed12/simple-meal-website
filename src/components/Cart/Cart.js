import React from 'react';
import './Cart.css';

const Cart = ({mealsNames}) => {
    // appending item to the Ul of this component
   
     let ul  = document.getElementById('items-container');

    if(ul){
        ul.innerText = '';
    };

     for(const mealName in mealsNames){
         
           const li = document.createElement('li');
           li.innerText = mealName + ' ' + mealsNames[mealName];
           ul.appendChild(li);
        
     };
     
    return (
        <div className='cart-info-container'>
            <h2>Added Foods</h2>
             <ul id='items-container'>

             </ul>
        </div>
    );
};

export default Cart;