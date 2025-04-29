import React, { useEffect } from 'react';
import { FaLeaf, FaHandsHelping, FaLightbulb, FaBalanceScale, FaGlobeAmericas, FaUsers } from 'react-icons/fa';
import './About.css';
import Kartik_Chahal from '../../assets/images/Kartik_Chahal.jpeg';
import Yash_Sharma from '../../assets/images/Yash_Sharma.jpeg';
import Yashika_Hudda from '../../assets/images/Yashika_Hudda.jpeg';
import Lovish_Bir from '../../assets/images/Lovish_Bir.jpeg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Bhoomi Sahayata </h1>
          <p className="about-hero-description">
            We are dedicated to revolutionizing the farming industry by promoting sustainable practices that maximize profits while preserving our planet for future generations.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-container">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                At Bhoomi Sahayata , our mission is to empower farmers with the knowledge, tools, and resources they need to adopt sustainable farming practices that are both environmentally responsible and economically profitable.
              </p>
              <p>
                We believe that sustainable farming is not just about environmental conservation—it's also about creating resilient agricultural systems that can withstand changing climate conditions, market fluctuations, and evolving consumer preferences.
              </p>
              <p>
                By bridging the gap between ecological stewardship and economic viability, we aim to transform the agricultural landscape and create a more sustainable future for all.
              </p>
            </div>
            <div className="mission-image">
              <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Sustainable Farming" />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaLeaf />
              </div>
              <h3 className="value-title">Sustainability</h3>
              <p>
                We are committed to promoting farming practices that maintain ecological balance, conserve resources, and protect biodiversity.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaHandsHelping />
              </div>
              <h3 className="value-title">Farmer Support</h3>
              <p>
                We prioritize the needs of farmers and work tirelessly to provide them with practical solutions that enhance their livelihoods.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaLightbulb />
              </div>
              <h3 className="value-title">Innovation</h3>
              <p>
                We continuously explore new ideas, technologies, and approaches to advance sustainable farming practices.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaBalanceScale />
              </div>
              <h3 className="value-title">Economic Viability</h3>
              <p>
                We believe that sustainable farming must also be profitable, and we are dedicated to demonstrating this through practical tools and resources.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaGlobeAmericas />
              </div>
              <h3 className="value-title">Global Perspective</h3>
              <p>
                We recognize the diverse challenges and opportunities in different agricultural contexts around the world.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3 className="value-title">Community</h3>
              <p>
                We foster a collaborative community where farmers, researchers, and consumers can share knowledge and work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Team</h2>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-image">
                <img src={Lovish_Bir} alt="Dr. Michael Chen" />
              </div>
              <h3 className="team-member-name">Lovish Bir</h3>
             
            </div>

            <div className="team-member">
              <div className="team-member-image">
                <img src={Yashika_Hudda} alt="Yashika Hudda" />
              </div>
              <h3 className="team-member-name">Yashika Hudda</h3>
             
            </div>

            <div className="team-member">
              <div className="team-member-image">
                <img src={Kartik_Chahal} alt="Kartik Chahal" />
              </div>
              <h3 className="team-member-name">Kartik Chahal</h3>
              
            </div>

            <div className="team-member">
              <div className="team-member-image">
                <img src={Yash_Sharma} alt="Yash Sharma" />
              </div>
              <h3 className="team-member-name">Yash Sharma</h3>
             
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;