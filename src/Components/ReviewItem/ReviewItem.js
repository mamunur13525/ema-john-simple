import React from 'react';
import './Review.css';
import Product from '../Product/Product';
const ReviewItem = (props) => {

    const {key} = props.product;

    return (
        <>
         <Product key={key} product={props.product}></Product>
         <button className="button">Remove</button>
       </>
    );
};

export default ReviewItem;