import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useCart } from '../../contexts/CartContext';
import { useSearch } from '../../contexts/SearchContext';
import Nav from './Nav';
import './Rice.css';

const Rice = () => {
  const { addToCart } = useCart();
  const { searchQuery } = useSearch();
  console.log("Rice component rendered");

  const productsData = {
    recommendedProducts: [
      { id: uuidv4(), name: "Basmathi Rice", price: 150, image: "/images/RiceAndOthers/BasmathiRice.png" },
      { id: uuidv4(), name: "Brown Rice 10Kg", price: 750, image: "/images/RiceAndOthers/brownRice10.jpg" },
      { id: uuidv4(), name: "White Rice 1Kg", price: 60, image: "/images/RiceAndOthers/whiteRice1.webp" },
      { id: uuidv4(), name: "White Rice 25Kg", price: 1380, image: "/images/RiceAndOthers/whiteRice25.jpeg" },
      { id: uuidv4(), name: "Sugar 1Kg", price: 40, image: "/images/RiceAndOthers/sugar.png" },
      { id: uuidv4(), name: "Salt 1kg", price: 25, image: "/images/RiceAndOthers/salt.jpg" },
      { id: uuidv4(), name: "Jaggery", price: 30, image: "/images/RiceAndOthers/jaggery.png" },
    ],
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Default quantity is set to 1
  };

  // Filter products based on the search query
  const filteredProducts = productsData.recommendedProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Nav />
      <center>
        <h1>Rice And Others</h1>
      </center>
      <div className='product-grid'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className='Home-products'>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>Price: Rs{product.price.toFixed(2)}</p>
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

export default Rice;
