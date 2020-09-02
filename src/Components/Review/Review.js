import React, { useEffect, useState} from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct =(productKey)=>{
        const remove = cart.filter(pd => pd.key !== productKey)
        setCart(remove);
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

 

    return (
        <div>
            <h1>Total Items : {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem key={pd.key} removeProduct={removeProduct} product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;