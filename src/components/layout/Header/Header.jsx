import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logo from '../../../assets/logo.svg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Sustainable Farming" />
          <span className="logo-text">EcoFarm Pro</span>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <FaBars />
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {mobileMenuOpen && (
            <button className="mobile-close-btn" onClick={toggleMobileMenu}>
              <FaTimes />
            </button>
          )}
          
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/techniques" className="nav-link" onClick={closeMobileMenu}>
                Techniques
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/market-insights" className="nav-link" onClick={closeMobileMenu}>
                Market Insights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profit-calculator" className="nav-link" onClick={closeMobileMenu}>
                Profit Calculator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resources" className="nav-link" onClick={closeMobileMenu}>
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link" onClick={closeMobileMenu}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;