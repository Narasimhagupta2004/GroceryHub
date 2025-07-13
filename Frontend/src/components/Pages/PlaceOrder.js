import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext'; // Ensure this path is correct
import Nav from './Nav';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const { cartItems, clearCart } = useCart(); // Get cart items and clearCart function
    const navigate = useNavigate();

    // Calculate total amount
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show success message
        toast.success("Order placed successfully!");

        // Clear cart after short delay
        setTimeout(() => {
            clearCart();
            setOrderConfirmed(true); // Show confirmation popup
        }, 1000);
    };

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/cart'); // Redirect to cart if empty
        }
    }, [cartItems]);

    return (
        <div>
            <Nav />
            <Toaster />
            <form onSubmit={handleSubmit} className='place-order'>
                <div className="place-order-left">
                    <p className='title'>Delivery Information</p>
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' required />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required />
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' required />
                    <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' required />
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' required />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' required />
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' required />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' required />
                    <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' required />
                </div>
                <div className="place-order-right">
                    <h2>Cart Summary</h2>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name}: Rs{item.price.toFixed(2)} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount: Rs{totalAmount.toFixed(2)}</h3>
                    <button className='place-order-submit' type='submit'>Place Order</button>
                </div>
            </form>

            {/* Confirmation Popup */}
            {orderConfirmed && (
                <div className="confirmation-popup">
                    <h3>Order Confirmed!</h3>
                    <p>Thank you for your order!</p>
                    <h4>Order Details:</h4>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name}: Rs{item.price.toFixed(2)} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount: Rs{totalAmount.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default PlaceOrder;
