import React, { useEffect, useState} from 'react';
<<<<<<< HEAD
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
=======
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
>>>>>>> f92cbd6e290952c0f394e34e012dfe1d26a3e2c6
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import "./Review.css";
import happyOrder from "../../images/giphy.gif";


const Review = () => {
    const [cart, setCart] = useState([]);
<<<<<<< HEAD
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


=======
    const removeProduct =(productKey)=>{
        const remove = cart.filter(pd => pd.key !== productKey)
        setCart(remove);
        removeFromDatabaseCart(productKey);
    }

>>>>>>> f92cbd6e290952c0f394e34e012dfe1d26a3e2c6
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
<<<<<<< HEAD
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
=======
        <div>
            <h1>Total Items : {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem key={pd.key} removeProduct={removeProduct} product={pd}></ReviewItem>)
            }
>>>>>>> f92cbd6e290952c0f394e34e012dfe1d26a3e2c6
        </div>
    );
};

export default Review;