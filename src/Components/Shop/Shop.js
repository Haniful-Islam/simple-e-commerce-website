import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="products-container">
            <div className="cart-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <h2>Selected Products</h2>
                {
                    cart.map(product => <h3>{product.name}</h3>)
                }
                <button className="choose-btn">CHOOSE 1 FOR ME</button>
                <button className="choose-again-btn">CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Shop;