import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs
import { useCart } from '../../contexts/CartContext'; // Ensure this path is correct
import { useSearch } from '../../contexts/SearchContext'; // Ensure this path is correct
import './Masalas.css';
import Nav from './Nav';

const Masalas = () => {
  const { addToCart } = useCart(); // Get addToCart function from CartContext
  const { searchQuery } = useSearch(); // Get the search query from SearchContext
  console.log("Masalas component rendered");

  const productsData = {
    recommendedProducts: [
      { id: uuidv4(), name: "Biryani Masala", price: 20, image: "/images/MasalaAndSpices/biryani.png" },
      { id: uuidv4(), name: "Black Pepper Powder", price: 30, image: "/images/MasalaAndSpices/blackPepper.png" },
      { id: uuidv4(), name: "Chicken Masala", price: 25, image: "/images/MasalaAndSpices/chicken.png" },
      { id: uuidv4(), name: "Coriander Powder", price: 35, image: "/images/MasalaAndSpices/coriander.png" },
      { id: uuidv4(), name: "Jeera Powder", price: 40, image: "/images/MasalaAndSpices/jeeraPowder.png" },
      { id: uuidv4(), name: "Garam Masala", price: 25, image: "/images/MasalaAndSpices/garamM.webp" },
      { id: uuidv4(), name: "Mirchi Powder", price: 40, image: "/images/MasalaAndSpices/mirchi.png" },
      { id: uuidv4(), name: "Sambar Powder", price: 15, image: "/images/MasalaAndSpices/sambar.png" },
      { id: uuidv4(), name: "Turmeric Powder", price: 20, image: "/images/MasalaAndSpices/turmeric.png" },
      { id: uuidv4(), name: "Dhanya Seeds", price: 35, image: "/images/MasalaAndSpices/DhanyaSeeds.png" },
      { id: uuidv4(), name: "Fenugreek Seeds", price: 20, image: "/images/MasalaAndSpices/fenugreekSeeds.png" },
      { id: uuidv4(), name: "Jeera", price: 30, image: "/images/MasalaAndSpices/jeera.jpg" },
      { id: uuidv4(), name: "Elachi", price: 50, image: "/images/MasalaAndSpices/elachi.png" },
      { id: uuidv4(), name: "Cloves", price: 20, image: "/images/MasalaAndSpices/cloves.png" },
      { id: uuidv4(), name: "Cinnamon", price: 15, image: "/images/MasalaAndSpices/cinnamon.png" },
      { id: uuidv4(), name: "Garlic Paste", price: 25, image: "/images/MasalaAndSpices/garlicPaste.png" },
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
        <h1>Masala & Spices</h1>
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

export default Masalas;