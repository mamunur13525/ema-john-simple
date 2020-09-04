import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getDatabaseCart, addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([])

  
    useEffect(()=> {

        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(key=>{
            const product = fakeData.find(pd => pd.key === key);
             product.value = saveCart[key];
            return product;
        })
        setCart(previousCart)
    },[])



    const addCart = (product) => {
        const ToBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === ToBeAddedKey);

        let count = 1;
        let newCart ;
        if(sameProduct){
             count = sameProduct.value +1;
            sameProduct.value = count;
            const others = cart.filter(pd => pd.key !== ToBeAddedKey)
            newCart= [...others, sameProduct];
        }else{
            product.value = 1;
            newCart=[...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
     
    }

    return (
        <div className="cart-container">
            <div className="product-container">
                {
                    products.map(pd => <Product key={pd.key} addToCart={true} addCart={addCart} product={pd}></Product>)
                }
            </div>
            <div className="cart">
                <Cart  cartValue={cart.Value}  cart={cart}>
                    <Link to="/order">
                        <button className="cart-btn left-cart-btn">Product Review</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;