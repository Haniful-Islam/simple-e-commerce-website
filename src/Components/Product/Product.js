import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { handleAddtoCart, product } = props;
    const { img, name, price } = props.product;
    // console.log(props);
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <p>Price:${price}</p>
            </div>
            <button className="btn-cart" onClick={() => handleAddtoCart(product)}><span>ADD TO CART</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;