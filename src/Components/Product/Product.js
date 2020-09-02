import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {

    const {name, seller, price, stock, img, key} = props.product;
  
    // console.log(data);
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h2><Link to={"/product/"+key}>{name}</Link></h2>
                <p>by: {seller}</p>
                <h3>${price}</h3>
                <p>only {stock} left in stock - order soon</p>
            {
               props.addToCart &&

            <button onClick={() => props.addCart(props.product)} className="cart-btn"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            }


            </div>
        </div>
    );
};

export default Product;