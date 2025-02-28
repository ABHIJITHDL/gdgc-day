import React, { useState, useContext } from 'react';
import AccessibilityContext from '../context/AccessibilityContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { accessibilitySettings } = useContext(AccessibilityContext);
  
  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="GDG_logo.png" alt="Tech X Inclusivity Club Logo" />
          <span className="navbar-title">Tech X Inclusivity</span>
        </div>
        
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggle-icon"></span>
        </button>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#register" className="navbar-cta">Register</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;