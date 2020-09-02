import React, { useEffect, useState} from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart, setCart] = useState([]);
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
                cart.map(pd => <ReviewItem product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;