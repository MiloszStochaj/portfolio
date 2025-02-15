// src/layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/layout/_header.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
