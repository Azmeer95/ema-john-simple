import React from 'react';
import './Product.css';
// Using font awesome in reactJS style.   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// Passing dynamic data to product component
const Product = (props) => {
    console.log(props);
    // Data needed
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className="main-btn"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;