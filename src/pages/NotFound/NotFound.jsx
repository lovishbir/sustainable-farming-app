import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaEnvelope } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/4076/4076432.png" 
          alt="Plant growing from soil" 
          className="not-found-image"
        />
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          Oops! The page you are looking for seems to have been harvested early or planted in a different field. Let's help you find your way back to fertile ground.
        </p>
        <div className="not-found-links">
          <Link to="/" className="btn">
            <FaHome style={{ marginRight: '8px' }} /> Return Home
          </Link>
          <Link to="/resources" className="btn btn-secondary">
            <FaSearch style={{ marginRight: '8px' }} /> Browse Resources
          </Link>
          <Link to="/contact-us" className="btn btn-accent">
            <FaEnvelope style={{ marginRight: '8px' }} /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;