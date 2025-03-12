import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Techniques.css';

const Techniques = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState({
    category: 'all',
    difficulty: 'all',
    climateZone: 'all'
  });

  const [techniques, setTechniques] = useState([
    {
      id: 1,
      title: 'Crop Rotation',
      description: 'Systematically changing the type of crops grown in a particular area to improve soil health and reduce pest and disease problems.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'soil',
      difficulty: 'beginner',
      climateZone: 'temperate',
      benefits: ['Improved soil structure', 'Pest reduction', 'Higher yields']
    },
    {
      id: 2,
      title: 'Companion Planting',
      description: 'Growing different plants together for mutual benefit, including pest control, pollination, and maximizing use of space.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'planting',
      difficulty: 'intermediate',
      climateZone: 'all',
      benefits: ['Natural pest control', 'Increased biodiversity', 'Space optimization']
    },
    {
      id: 3,
      title: 'Drip Irrigation',
      description: 'A water-efficient irrigation method that delivers water directly to the plant roots, reducing water waste and improving plant health.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'water',
      difficulty: 'intermediate',
      climateZone: 'arid',
      benefits: ['Water conservation', 'Reduced weed growth', 'Consistent moisture']
    },
    {
      id: 4,
      title: 'Cover Cropping',
      description: 'Planting specific crops to cover the soil rather than for harvest, protecting and improving soil quality during off-seasons.',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'soil',
      difficulty: 'beginner',
      climateZone: 'temperate',
      benefits: ['Erosion control', 'Nitrogen fixation', 'Weed suppression']
    },
    {
      id: 5,
      title: 'Integrated Pest Management (IPM)',
      description: 'A holistic approach to pest control that uses multiple techniques to minimize economic damage while reducing pesticide use.',
      image: 'https://images.unsplash.com/photo-1599583863916-e06c29087f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'pest',
      difficulty: 'advanced',
      climateZone: 'all',
      benefits: ['Reduced chemical use', 'Ecosystem preservation', 'Long-term effectiveness']
    },
    {
      id: 6,
      title: 'Agroforestry',
      description: 'Integrating trees and shrubs into crop and animal farming systems to create environmental, economic, and social benefits.',
      image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      category: 'planting',
      difficulty: 'advanced',
      climateZone: 'tropical',
      benefits: ['Carbon sequestration', 'Habitat creation', 'Diversified income']
    },
    {
      id: 7,
      title: 'No-Till Farming',
      description: 'A cultivation method that avoids disrupting the soil through tillage, preserving soil structure and reducing erosion.',
      image: 'https://images.unsplash.com/photo-1591902216271-f997d78c61a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      category: 'soil',
      difficulty: 'intermediate',
      climateZone: 'all',
      benefits: ['Soil preservation', 'Carbon retention', 'Reduced fuel costs']
    },
    {
      id: 8,
      title: 'Rainwater Harvesting',
      description: 'Collecting and storing rainwater for agricultural use, reducing dependence on groundwater and other water sources.',
      image: 'https://images.unsplash.com/photo-1567176686299-0701efccdede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'water',
      difficulty: 'beginner',
      climateZone: 'all',
      benefits: ['Water independence', 'Cost savings', 'Flood prevention']
    },
    {
      id: 9,
      title: 'Biodynamic Farming',
      description: 'A holistic, ecological approach to farming that considers spiritual and mystical perspectives, often using special preparations.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'holistic',
      difficulty: 'advanced',
      climateZone: 'temperate',
      benefits: ['Soil vitality', 'Product quality', 'Farm ecosystem balance']
    }
  ]);

  const [filteredTechniques, setFilteredTechniques] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const techniquesPerPage = 6;

  useEffect(() => {
    filterTechniques();
  }, [filter]);

  const filterTechniques = () => {
    let filtered = [...techniques];
    
    if (filter.category !== 'all') {
      filtered = filtered.filter(technique => technique.category === filter.category);
    }
    
    if (filter.difficulty !== 'all') {
      filtered = filtered.filter(technique => technique.difficulty === filter.difficulty);
    }
    
    if (filter.climateZone !== 'all') {
      filtered = filtered.filter(technique => 
        technique.climateZone === filter.climateZone || technique.climateZone === 'all'
      );
    }
    
    setFilteredTechniques(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: value
    }));
  };

  // Get current techniques for pagination
  const indexOfLastTechnique = currentPage * techniquesPerPage;
  const indexOfFirstTechnique = indexOfLastTechnique - techniquesPerPage;
  const currentTechniques = filteredTechniques.slice(indexOfFirstTechnique, indexOfLastTechnique);
  const totalPages = Math.ceil(filteredTechniques.length / techniquesPerPage);

  const renderDifficultyDots = (difficulty) => {
    const levels = {
      'beginner': 1,
      'intermediate': 2,
      'advanced': 3
    };
    
    return (
      <div className="difficulty-indicator">
        {[1, 2, 3].map(level => (
          <div 
            key={level} 
            className={`difficulty-dot ${level <= levels[difficulty] ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="techniques-page">
      <section className="techniques-hero">
        <div className="container">
          <h1>Sustainable Farming Techniques</h1>
          <p className="techniques-hero-description">
            Discover proven methods to improve your farm's productivity while promoting environmental sustainability and maximizing profits.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="techniques-filter">
          <form className="filter-form">
            <div className="filter-group">
              <label className="filter-label" htmlFor="category">Category</label>
              <select 
                className="filter-select" 
                id="category" 
                name="category" 
                value={filter.category}
                onChange={handleFilterChange}
              >
                <option value="all">All Categories</option>
                <option value="soil">Soil Management</option>
                <option value="water">Water Conservation</option>
                <option value="pest">Pest Management</option>
                <option value="planting">Planting Methods</option>
                <option value="holistic">Holistic Approaches</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label className="filter-label" htmlFor="difficulty">Difficulty Level</label>
              <select 
                className="filter-select" 
                id="difficulty" 
                name="difficulty" 
                value={filter.difficulty}
                onChange={handleFilterChange}
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label className="filter-label" htmlFor="climateZone">Climate Zone</label>
              <select 
                className="filter-select" 
                id="climateZone" 
                name="climateZone" 
                value={filter.climateZone}
                onChange={handleFilterChange}
              >
                <option value="all">All Zones</option>
                <option value="temperate">Temperate</option>
                <option value="tropical">Tropical</option>
                <option value="arid">Arid</option>
              </select>
            </div>
          </form>
        </div>

        {filteredTechniques.length === 0 ? (
          <div className="no-results" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h3>No techniques found matching your criteria</h3>
            <p>Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          <>
            <div className="techniques-grid">
              {currentTechniques.map(technique => (
                <div className="technique-card" key={technique.id}>
                  <div className="technique-image">
                    <img src={technique.image} alt={technique.title} />
                  </div>
                  <div className="technique-content">
                    <h3 className="technique-title">{technique.title}</h3>
                    <div className="technique-meta">
                      <div className="technique-difficulty">
                        Difficulty: {renderDifficultyDots(technique.difficulty)}
                      </div>
                      <div className="technique-climate">
                        {technique.climateZone === 'all' ? 'All Climates' : technique.climateZone}
                      </div>
                    </div>
                    <p className="technique-description">{technique.description}</p>
                    <div className="technique-benefits">
                      {technique.benefits.map((benefit, index) => (
                        <span key={index} className="benefit-tag">{benefit}</span>
                      ))}
                    </div>
                    <Link to={`/techniques/${technique.id}`} className="btn technique-details-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="pagination-btn" 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft />
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button 
                  className="pagination-btn" 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Techniques;