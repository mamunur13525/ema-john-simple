import React from 'react';
import './Review.css';
import Product from '../Product/Product';
const ReviewItem = (props) => {

    const {key} = props.product;

    return (
        <>
         <Product key={key} product={props.product}></Product>
<<<<<<< HEAD
         <button onClick={()=> props.handleRemoveItem(key)} className="main-button">Remove</button>
=======
         <button onClick={()=>props.removeProduct(key)} className="button">Remove</button>
>>>>>>> f92cbd6e290952c0f394e34e012dfe1d26a3e2c6
       </>
    );
};

export default ReviewItem;