import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs
import { useCart } from '../../contexts/CartContext'; // Ensure this path is correct
import { useSearch } from '../../contexts/SearchContext'; // Ensure this path is correct
import './Flours.css';
import Nav from './Nav';

const Flours = () => {
  const { addToCart } = useCart(); // Get addToCart function from CartContext
  const { searchQuery } = useSearch(); // Get the search query from SearchContext
  console.log("Flours component rendered");

  const productsData = {
    recommendedProducts: [
      { id: uuidv4(), name: "Atta Flour", price: 50, image: "/images/Flours/attaFlour.jpg" },
      { id: uuidv4(), name: "Besan Flour", price: 140, image: "/images/Flours/besan.png" },
      { id: uuidv4(), name: "Corn Flour", price: 40, image: "/images/Flours/cornFlour.png" },
      { id: uuidv4(), name: "Maida", price: 40, image: "/images/Flours/maida.png" },
      { id: uuidv4(), name: "Ragi Flour", price: 70, image: "/images/Flours/ragiFlour.jpg" },
      { id: uuidv4(), name: "Bansi Ravva", price: 45, image: "/images/Flours/Bansi.png" },
      { id: uuidv4(), name: "Rice Flour", price: 30, image: "/images/Flours/riceFlour.webp" },
      { id: uuidv4(), name: "Sooji", price: 40, image: "/images/Flours/sooji.png" },
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
      <h1>Flours</h1>
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

export default Flours;