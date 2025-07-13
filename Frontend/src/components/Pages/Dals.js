import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs
import { useCart } from '../../contexts/CartContext'; // Ensure this path is correct
import { useSearch } from '../../contexts/SearchContext'; // Ensure this path is correct
import './Dals.css';
import Nav from './Nav';

const Dals = () => {
  const { addToCart } = useCart(); // Get the addToCart function from CartContext
  const { searchQuery } = useSearch(); // Get the search query from SearchContext
  console.log("Dals component rendered");

  const productsData = {
    recommendedProducts: [
      { id: uuidv4(), name: "Bengal Gram", price: 130, image: "/images/Dals/bengalgram.webp" },
      { id: uuidv4(), name: "Chana Dal", price: 140, image: "/images/Dals/chanaDal.png" },
      { id: uuidv4(), name: "Whole Black Gram", price: 110, image: "/images/Dals/blackGram.jpeg" },
      { id: uuidv4(), name: "Green Moong", price: 100, image: "/images/Dals/greenMong.jpeg" },
      { id: uuidv4(), name: "Kala Chana", price: 80, image: "/images/Dals/kalaChana.png" },
      { id: uuidv4(), name: "Moong Dal", price: 110, image: "/images/Dals/MoongDal.png" },
      { id: uuidv4(), name: "Rajama", price: 140, image: "/images/Dals/Rajma.png" },
      { id: uuidv4(), name: "Roasted Chana", price: 140, image: "/images/Dals/RostedChana.jpeg" },
      { id: uuidv4(), name: "Toor Dal", price: 120, image: "/images/Dals/ToorDal.webp" },
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
        <h1>Dals and Pulses</h1>
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

export default Dals;