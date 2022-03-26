import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        console.log(product.name)
        const newCart = [...cart, product];
        setCart(newCart);
        if (newCart.length > 4) {
            alert('No Item Selected')
        }
        // else {
        //     newCart(newCart);
        // }
        // const selected = () => {

        // }


    }


    return (
        <div className="products-container">
            <div className="cart-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        // selected={selected}
                        handleAddtoCart={handleAddtoCart}

                    ></Product>)
                }
            </div>
            <div className="order-container">
                <Cart
                    key={cart.id}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;