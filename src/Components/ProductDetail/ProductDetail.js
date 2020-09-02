import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const ProductDetail = () => {

    const {ProductKey} = useParams();
    const product = fakeData.find(pd=> pd.key === ProductKey);
    
    const {seller, name, key } = product;

    return (
        <div>
            <h1> {seller} Product Coming Sooon???</h1>
            <Product addToCart={false} product={product}></Product>
        
        </div>
    );
};

export default ProductDetail;