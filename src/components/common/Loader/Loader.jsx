import React from 'react';
import './Loader.css';

const Loader = ({ small }) => {
  return (
    <div className="loader-container">
      <div className={`loader ${small ? 'loader-small' : ''}`}></div>
    </div>
  );
};

export default Loader;