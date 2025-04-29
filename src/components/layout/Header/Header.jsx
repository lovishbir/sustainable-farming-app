
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
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Bhoomi Sahayata - Sustainable Farming" />
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <FaBars />
        </button>

        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {mobileMenuOpen && (
              <button className="mobile-close-btn" onClick={toggleMobileMenu} aria-label="Close menu">
                <FaTimes />
              </button>
            )}
            
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/techniques" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                Techniques
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/market-insights" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                Market Insights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profit-calculator" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                Green Verse
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resources" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
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
