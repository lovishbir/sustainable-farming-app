import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import logoWhite from '../../../assets/logo-white.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              <img src={logoWhite} alt="Sustainable Farming" />
              <span className="footer-logo-text">EcoFarm Pro</span>
            </Link>
            <p>
              We are dedicated to promoting sustainable farming practices that maximize profits while preserving the environment for future generations.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-links-container">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/techniques">Farming Techniques</Link></li>
              <li><Link to="/market-insights">Market Insights</Link></li>
              <li><Link to="/profit-calculator">Profit Calculator</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>

          <div className="footer-links-container">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Sustainable Practices</a></li>
              <li><a href="#">Organic Certification</a></li>
              <li><a href="#">Crop Selection Guide</a></li>
              <li><a href="#">Water Management</a></li>
              <li><a href="#">Soil Health</a></li>
              <li><a href="#">Farm Equipment</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <span className="icon"><FaMapMarkerAlt /></span>
                <span>123 Eco Farm Road, Green Valley, CA 94123</span>
              </li>
              <li>
                <span className="icon"><FaPhone /></span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <span className="icon"><FaEnvelope /></span>
                <span>info@ecofarmpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EcoFarm Pro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;