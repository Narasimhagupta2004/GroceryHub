import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs
import { useCart } from '../../contexts/CartContext'; // Ensure this path is correct
import { useSearch } from '../../contexts/SearchContext'; // Ensure this path is correct
import './DryFruits.css';
import Nav from './Nav';

const DryFruits = () => {
  const { addToCart } = useCart(); // Get the addToCart function from CartContext
  const { searchQuery } = useSearch(); // Get the search query from SearchContext
  console.log("Dry Fruits component rendered");

  const productsData = {
    recommendedProducts: [
      { id: uuidv4(), name: "Almonds", price: 800, image: "/images/DryFruits/Almonds.jpeg" },
      { id: uuidv4(), name: "Cashew", price: 700, image: "/images/DryFruits/cashew.jpeg" },
      { id: uuidv4(), name: "Kismiss", price: 250, image: "/images/DryFruits/kismis.jpeg" },
      { id: uuidv4(), name: "Pista", price: 680, image: "/images/DryFruits/pista.jpeg" },
      { id: uuidv4(), name: "Walnuts", price: 1000, image: "/images/DryFruits/walnuts.jpeg" },
    ],
  };

  // Local state to keep track of quantities (optional)
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1; // Default to 1 if not specified
    addToCart({ ...product, quantity });
    setQuantities((prev) => ({ ...prev, [product.id]: quantity })); // Update quantity state after adding to cart
  };

  // Filter products based on the search query
  const filteredProducts = productsData.recommendedProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Nav />
      <center>
        <h1>Dry Fruits</h1>
      </center>
      <div className='product-grid'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className='Home-products'>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>Price: Rs{product.price.toFixed(2)}</p>
              {/* Removed increment and decrement controls */}
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      <div className="gocart">
        <center>
          <Link to="/cart" className="gocart-button">Go to Cart</Link>
        </center>
      </div>
    </div>
  );
};

export default DryFruits;