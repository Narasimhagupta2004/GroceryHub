import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../contexts/SearchContext';
import './Nav.css';
import search_icon_light from './search-w.png';

const Nav = () => {
  const { setSearchQuery } = useSearch();
  return (
    <div className='header-container'>
      <div>
      <div className='search-box-a'>
        <input type="text"
          placeholder='Search'
          onChange={(e) => setSearchQuery(e.target.value)} // Update global search quer
        />
        <img src={search_icon_light} alt="Search Icon" />
      </div>
      </div>

      <nav className='nav-links'>
        <Link to="/dals" className='nav-item'>Dals & Pulses</Link>
        <Link to="/dry-fruits" className='nav-item'>Dry Fruits</Link>
        <Link to="/flours" className='nav-item'>Flours</Link>
        <Link to="/masalas" className='nav-item'>Masalas</Link>
        <Link to="/oils" className='nav-item'>Edible Oils</Link>
        <Link to="/rice" className='nav-item'>Rice & Others</Link>
      </nav>
    </div>
  );
};

export default Nav;