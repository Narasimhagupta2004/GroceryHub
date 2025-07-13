import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Cart.css';
import Nav from './Pages/Nav';

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleOrderSubmit = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        console.log("Order submitted:", cartItems);
        setOrderConfirmed(true);
    };

    return (
        <div>
            <Nav />
            <div className="cart-container">
                <h1>Your Cart</h1>
                {orderConfirmed && (
                    <div className="confirmation-popup">
                        <p>Order Confirmed!</p>
                    </div>
                )}
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h4>{item.name}</h4>
                                        <p>Price: Rs: {item.price.toFixed(2)}</p>
                                        <p>Quantity:
                                            <button className="quantity-button" onClick={() => decrementQuantity(item.id)}>-</button>
                                            {item.quantity}
                                            <button className="quantity-button" onClick={() => incrementQuantity(item.id)}>+</button>
                                        </p>
                                        <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="total-price">
                            <h3>Total Price: Rs: {totalPrice.toFixed(2)}</h3>
                        </div>
                        {/* <button className="order-button" onClick={handleOrderSubmit}>Check Out</button> */}
                        <div>
                        <Link to="/place-order">
                             <button className="order-button">Check Out</button> {/* Redirects to Place Order page */}
                        </Link>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;