import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const totalItem = cart.length;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    const chooseButton = () => {
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        };
        const selectedProductIndex = getRandomInt(cart.length);
        setSelectedProduct(cart[selectedProductIndex]);
        console.log(selectedProduct);
    };
    const againChooseBtn = () => {
        window.location.reload();
    };

    return (
        <div className="cart">
            <h2 className="text-shadow">Selected Products</h2>
            <div className='selected-name'>
                <p>Total Items: {totalItem}</p>
                {
                    cart.map((product) => (
                        <div className="product-show" key={product.id}>
                            <img className="laptop-img" src={product.img} alt="" />
                            <p>{product.name}</p>
                        </div>
                    ))
                }
            </div>
            <button className='choose-btn' onClick={chooseButton}><p>CHOOSE ONE FOR ME</p></button>
            {selectedProduct.id && (
                <div className="display-randomProduct">
                    <img className="random-selectedProduct" src={selectedProduct.img} alt="" />
                    <p>{selectedProduct.name}</p>
                </div>
            )}
            <button className='choose-btn' onClick={againChooseBtn}><p>CHOOSE AGAIN</p></button>
        </div>
    );
};

export default Cart;