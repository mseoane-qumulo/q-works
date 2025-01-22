// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/qworks.png';

const Header = () => (
  <header style={{ padding: '1rem', background: '#282c34', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    {/* Branding / Logo */}
    <h1 style={{ margin: 0 }}></h1>
    <img src={logo} alt="q-works logo" style={{ height: '160px' }} />
    
    {/* Navigation Links */}
    <nav>
      <Link to="/" style={{ margin: '0 10px', color: '#61dafb', textDecoration: 'none' }}>Home</Link>
      <Link to="/catalog" style={{ margin: '0 10px', color: '#61dafb', textDecoration: 'none' }}>Catalog</Link>
    </nav>
  </header>
);

export default Header;
