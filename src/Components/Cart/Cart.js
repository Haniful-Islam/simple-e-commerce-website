import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const selectOne = (product) => {
        if (product.length) {
            const randomProduct = Math.round(Math.random() * (product.length - 1))
            console.log(randomProduct);
            const text = product[randomProduct].name + "Recommand for you";
            alert(text);
        }
        else {
            alert("Please select the random product");
        }
    }

    return (
        <div>
            <h2>Selected Products</h2>
            {
                cart.map(product => <p>{product.name}</p>)

            }
            <button className="choose-btn" onClick={() => selectOne(cart)}>CHOOSE 1 FOR ME</button>
            <button className="choose-again-btn">CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;