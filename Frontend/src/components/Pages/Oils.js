import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useCart } from '../../contexts/CartContext';
import { useSearch } from '../../contexts/SearchContext';
import Nav from './Nav';
import './Oils.css';

const Oils = () => {
  const { addToCart } = useCart();
  const { searchQuery } = useSearch();
  console.log("Oils component rendered");

  const productsData = {
    recommendedProducts: [
      { id: uuidv4(), name: "Palm Oil 1-Lit", price: 95, image: "/images/OilsAndGhee/pm1.jpg" },
      { id: uuidv4(), name: "Palm Oil 15-Lit", price: 460, image: "/images/OilsAndGhee/pm2.jpg" },
      { id: uuidv4(), name: "Sunflower Oil 1-Lit", price: 125, image: "/images/OilsAndGhee/sf1.png" },
      { id: uuidv4(), name: "Sunflower Oil 5-Lit", price: 550, image: "/images/OilsAndGhee/sf2.png" },
      { id: uuidv4(), name: "RiceBrand Oil 1-Lit", price: 120, image: "/images/OilsAndGhee/rb1.png" },
      { id: uuidv4(), name: "RiceBrand Oil 5-Lit", price: 530, image: "/images/OilsAndGhee/rb2.png" },
      { id: uuidv4(), name: "Ground Nut Oil 1-Lit", price: 150, image: "/images/OilsAndGhee/gn1.png" },
      { id: uuidv4(), name: "Ground Nut Oil 5-Lit", price: 770, image: "/images/OilsAndGhee/gn2.png" },
      { id: uuidv4(), name: "Olive Oil 5-Lit", price: 1000, image: "/images/OilsAndGhee/oliveoil.webp" },
      { id: uuidv4(), name: "Mustard Oil 1-Lit", price: 180, image: "/images/OilsAndGhee/mustardOil.png" },
      { id: uuidv4(), name: "Aachi Ghee 200ml", price: 140, image: "/images/OilsAndGhee/ghee1.png" },
      { id: uuidv4(), name: "Aachi Ghee 500ml", price: 250, image: "/images/OilsAndGhee/ghee2.png" },
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
        <h1>Edible Oils & Ghee</h1>
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

export default Oils;
