import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaChartLine, FaCalculator, FaHandHoldingUsd, FaWater, FaSeedling } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Bhoomi Sahayata</h1>
            <p className="hero-subtitle">
              Discover eco-friendly farming techniques that increase yield, reduce costs, and maximize your profits while preserving the environment for future generations.
            </p>
            {/* <div className="hero-buttons">
              <Link to="/techniques" className="btn">Explore Techniques</Link>
              <Link to="/profit-calculator" className="btn btn-secondary">Green Verse</Link>
            </div> */}
            <div className="hero-buttons">
                <Link 
                    to="/techniques" 
                    className="btn"
                    data-cursor-variant="button"
                    data-cursor-text="Explore"
                >
                    Explore Techniques
                </Link>
                <Link 
                    to="/profit-calculator" 
                    className="btn btn-secondary"
                    data-cursor-variant="button"
                    data-cursor-text="Calculate"
                >
                    Green Verse
                </Link>
                </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-title">
            <h2>How We Help Farmers</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card"
  data-cursor-variant="hover"
  data-cursor-text="Learn More">
              <div className="feature-content">
                <div className="feature-icon">
                  <FaLeaf />
                </div>
                <h3 className="feature-title">Sustainable Practices</h3>
                <p className="feature-description">
                  Learn eco-friendly farming methods that reduce environmental impact while improving soil health and crop quality.
                </p>
              </div>
            </div>

            <div className="feature-card"
  data-cursor-variant="hover"
  data-cursor-text="Learn More">
              <div className="feature-content">
                <div className="feature-icon">
                  <FaChartLine />
                </div>
                <h3 className="feature-title">Market Insights</h3>
                <p className="feature-description">
                  Stay informed about market trends, demand forecasts, and pricing strategies to maximize your revenue.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-content">
                <div className="feature-icon">
                  <FaCalculator />
                </div>
                <h3 className="feature-title">Green Verse</h3>
                <p className="feature-description">
                  Use our specialized tools to calculate potential profits, analyze costs, and optimize your farming business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-container">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Bhoomi Sahayata" />
            </div>
            <div className="about-content">
              <h2>Why Choose Bhoomi Sahayata?</h2>
              <p>
                Sustainable farming practices not only benefit the environment but also lead to increased profitability for farmers. By reducing input costs, improving soil health, and producing higher quality crops, sustainable farming creates a win-win situation.
              </p>
              <p>
                Our platform provides you with the knowledge, tools, and resources to implement these practices effectively and maximize your farm's potential.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">30%</div>
                  <div className="stat-label">Average Cost Reduction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25%</div>
                  <div className="stat-label">Increased Crop Yield</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">40%</div>
                  <div className="stat-label">Water Conservation</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">35%</div>
                  <div className="stat-label">Higher Profit Margins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>Success Stories</h2>
          </div>
          <div className="testimonials-container">
            <div className="testimonial">
              <p className="testimonial-content">
                "Switching to sustainable farming methods has transformed our family farm. We've reduced our costs by 35% while increasing our yield by 20%. The resources and guidance from EcoFarm Pro have been invaluable in this journey."
              </p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Davis" />
                </div>
                <div className="author-info">
                  <h4>John Davis</h4>
                  <p>Organic Vegetable Farmer, California</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-content">
                "The Green Verse tool helped me identify which crops would be most profitable for my region and soil type. I've seen a 40% increase in my farm's profitability since implementing these changes."
              </p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" />
                </div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Small-scale Farmer, Oregon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-container">
            <h2 className="cta-title">Ready to Maximize Your Farm's Potential?</h2>
            <p className="cta-text">
              Join thousands of farmers who are already benefiting from sustainable farming practices. Explore our resources, use our tools, and transform your farming business today.
            </p>
            <div className="cta-buttons">
              <Link to="/techniques" className="btn btn-accent">Explore Techniques</Link>
              <Link to="/contact-us" className="btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;