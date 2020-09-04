import React, { useEffect, useState} from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import "./Review.css";
import happyOrder from "../../images/giphy.gif";


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);
  
   const handleOrderPlace =()=>{
    setCart([]);
    setOrderPlace(true);
      
       processOrder();
   }
    const handleRemoveItem = (productKey) => {

       const newCart = cart.filter(pd=> pd.key !== productKey);
       setCart(newCart);
        removeFromDatabaseCart(productKey);

    }


    useEffect(()=>{
        const saveData = getDatabaseCart();
            const productKeys = Object.keys(saveData);
        const cartProducts = productKeys.map(key => {
            const productCart = fakeData.find(pd => pd.key === key);
            productCart.value = saveData[key];
            return productCart
    })
    setCart(cartProducts)
   },[])

   let thakyou;
   if(orderPlace){
    thakyou =<div><h1>Order Done</h1> <img src={happyOrder}></img></div>
   }

   const cartValue = cart.map(va => va.value);

    return (
        <div className="cart-container">
           <div className="product-container">
                <h1>Total Items : {cart.length}</h1>
                    {
                        cart.map(pd => <ReviewItem key={pd.key} handleRemoveItem={handleRemoveItem} product={pd}></ReviewItem>)
                    }
                     {thakyou}
           </div>
          
            <div className="cart-container">
                <Cart cartValue={cartValue} cart={cart}>
                    <button onClick={handleOrderPlace} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;