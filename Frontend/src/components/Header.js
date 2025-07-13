import { faEnvelope, faHome, faInfoCircle, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Header.css';
const Header = () => {
  const { cartItems } = useCart();
  const totalItems = Array.isArray(cartItems) 
    ? cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0) 
    : 0;
  return (
    <div className='navbar'>
            <h1 className='header-title'>E-Grocery Hub</h1>

      <ul>
        <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
        <li><Link to="/Login"><FontAwesomeIcon icon={faUser} /> Register</Link></li>
        <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About Us</Link></li>
        <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Us</Link></li>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart {totalItems > 0 && <span>({totalItems})</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;