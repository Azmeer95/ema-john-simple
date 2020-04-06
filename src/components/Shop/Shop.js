import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    // console.log(fakeData);
    // Fake data loaded 
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    // State jekhane, event handler shekhane add korba
    const handleAddProduct = () => {
        console.log("Added");
    }


    return (
        <div className="shop-container">
            <div className="product-container">
                
                    {   
                        // Mapping will be done on products. li will be created for each product
                        products.map(pd => <Product product={pd}></Product>)
                    }
            
            </div>
            <div className="cart-container">
                    <h3>THis is cart</h3>
            </div>
        </div>
    );
};

export default Shop;