import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaArrowRight, FaDownload, FaSearch, FaChevronLeft, FaChevronRight, FaBook, FaVideo, FaFileAlt, FaTools, FaGraduationCap, FaUsers } from 'react-icons/fa';
import './Resources.css';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 6;

  // Mock data for resources
  const allResources = [
    {
      id: 1,
      title: 'Sustainable Farming Techniques Guide',
      type: 'guide',
      date: 'September 15, 2023',
      description: 'A comprehensive guide to implementing sustainable farming techniques that maximize profits while preserving the environment.',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      downloads: 2547,
      link: '#'
    },
    {
      id: 2,
      title: 'Organic Certification Process Explained',
      type: 'guide',
      date: 'August 28, 2023',
      description: 'Step-by-step instructions for obtaining organic certification for your farm, including requirements and best practices.',
      image: 'https://images.unsplash.com/photo-1465284958051-58f7238a6582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      downloads: 1893,
      link: '#'
    },
    {
      id: 3,
      title: 'Sustainable Irrigation Systems',
      type: 'video',
      date: 'August 10, 2023',
      description: 'Video tutorial on designing and implementing water-efficient irrigation systems for sustainable farming operations.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      downloads: 1245,
      link: '#'
    },
    {
      id: 4,
      title: 'Soil Health Assessment Toolkit',
      type: 'tool',
      date: 'July 22, 2023',
      description: 'A set of tools and methods for assessing and monitoring soil health on your farm to optimize crop production.',
      image: 'https://images.unsplash.com/photo-1591902216271-f997d78c61a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      downloads: 3102,
      link: '#'
    },
    {
      id: 5,
      title: 'Market Analysis for Organic Produce',
      type: 'report',
      date: 'July 15, 2023',
      description: 'Detailed analysis of current market trends and future projections for organic produce to help farmers make informed decisions.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      downloads: 2781,
      link: '#'
    },
    {
      id: 6,
      title: 'Sustainable Pest Management Webinar',
      type: 'video',
      date: 'June 30, 2023',
      description: 'Recorded webinar featuring experts discussing effective and environmentally friendly pest management strategies.',
      image: 'https://images.unsplash.com/photo-1599583863916-e06c29087f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      downloads: 1567,
      link: '#'
    },
    {
      id: 7,
      title: 'Farm Financial Planning Template',
      type: 'tool',
      date: 'June 15, 2023',
      description: 'Excel spreadsheet template for financial planning and management specifically designed for sustainable farming operations.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
      downloads: 4235,
      link: '#'
    },
    {
      id: 8,
      title: 'Renewable Energy for Farms Guide',
      type: 'guide',
      date: 'May 28, 2023',
      description: 'Comprehensive guide to implementing renewable energy solutions on farms, including solar, wind, and biomass options.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      downloads: 1982,
      link: '#'
    },
    {
      id: 9,
      title: 'Sustainable Farming Certification Course',
      type: 'course',
      date: 'May 10, 2023',
      description: 'Online course offering in-depth training on sustainable farming practices with certification upon completion.',
      image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      downloads: 3456,
      link: '#'
    },
    {
      id: 10,
      title: 'Farmer Network Directory',
      type: 'network',
      date: 'April 22, 2023',
      description: 'Directory of sustainable farming networks and communities across the country for collaboration and knowledge sharing.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      downloads: 1245,
      link: '#'
    },
    {
      id: 11,
      title: 'Climate-Resilient Farming Strategies',
      type: 'report',
      date: 'April 8, 2023',
      description: 'Research report on farming strategies that enhance resilience to climate change and extreme weather events.',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      downloads: 2134,
      link: '#'
    },
    {
      id: 12,
      title: 'Farm-to-Table Marketing Workshop',
      type: 'video',
      date: 'March 25, 2023',
      description: 'Recorded workshop on effective marketing strategies for selling directly to consumers and restaurants.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      downloads: 1876,
      link: '#'
    }
  ];

  // Filter resources based on active tab and search term
  const getFilteredResources = () => {
    let filtered = [...allResources];
    
    // Filter by tab
    if (activeTab !== 'all') {
      filtered = filtered.filter(resource => resource.type === activeTab);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(term) || 
        resource.description.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  };

  const filteredResources = getFilteredResources();
  
  // Get current resources for pagination
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = filteredResources.slice(indexOfFirstResource, indexOfLastResource);
  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Get icon for resource type
  const getResourceTypeIcon = (type) => {
    switch (type) {
      case 'guide':
        return <FaBook />;
      case 'video':
        return <FaVideo />;
      case 'report':
        return <FaFileAlt />;
      case 'tool':
        return <FaTools />;
      case 'course':
        return <FaGraduationCap />;
      case 'network':
        return <FaUsers />;
      default:
        return <FaFileAlt />;
    }
  };

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="container">
          <h1>Resources</h1>
          <p className="resources-hero-description">
            Access our comprehensive collection of guides, tools, videos, and courses to help you implement sustainable farming practices and maximize your farm's profitability.
          </p>
        </div>
      </section>

      <section className="resources-section">
        <div className="container">
          <div className="resources-tabs">
            <div 
              className={`resources-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => {setActiveTab('all'); setCurrentPage(1);}}
            >
              All Resources
            </div>
            <div 
              className={`resources-tab ${activeTab === 'guide' ? 'active' : ''}`}
              onClick={() => {setActiveTab('guide'); setCurrentPage(1);}}
            >
              Guides
            </div>
            <div 
              className={`resources-tab ${activeTab === 'video' ? 'active' : ''}`}
              onClick={() => {setActiveTab('video'); setCurrentPage(1);}}
            >
              Videos
            </div>
            <div 
              className={`resources-tab ${activeTab === 'report' ? 'active' : ''}`}
              onClick={() => {setActiveTab('report'); setCurrentPage(1);}}
            >
              Reports
            </div>
            <div 
              className={`resources-tab ${activeTab === 'tool' ? 'active' : ''}`}
              onClick={() => {setActiveTab('tool'); setCurrentPage(1);}}
            >
              Tools
            </div>
            <div 
              className={`resources-tab ${activeTab === 'course' ? 'active' : ''}`}
              onClick={() => {setActiveTab('course'); setCurrentPage(1);}}
            >
              Courses
            </div>
            <div 
              className={`resources-tab ${activeTab === 'network' ? 'active' : ''}`}
              onClick={() => {setActiveTab('network'); setCurrentPage(1);}}
            >
              Networks
            </div>
          </div>

          <div className="resource-search">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search resources..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {filteredResources.length === 0 ? (
            <div className="no-results" style={{ textAlign: 'center', marginTop: '50px' }}>
              <h3>No resources found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="resources-grid">
                {currentResources.map(resource => (
                  <div className="resource-card" key={resource.id}>
                    <div className="resource-image">
                      <img src={resource.image} alt={resource.title} />
                    </div>
                    <div className="resource-content">
                      <div className="resource-meta">
                        <span className="resource-type">
                          {getResourceTypeIcon(resource.type)} {resource.type}
                        </span>
                        <span className="resource-date">
                          <FaCalendarAlt className="resource-date-icon" /> {resource.date}
                        </span>
                      </div>
                      <h3 className="resource-title">{resource.title}</h3>
                      <p className="resource-description">{resource.description}</p>
                      <div className="resource-actions">
                        <a href={resource.link} className="resource-link">
                          View Resource <FaArrowRight className="resource-link-icon" />
                        </a>
                        <span className="resource-downloads">
                          <FaDownload className="resource-downloads-icon" /> {resource.downloads}
                        </span>
                      </div>
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
      </section>
    </div>
  );
};

export default Resources;