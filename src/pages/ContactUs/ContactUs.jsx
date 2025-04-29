import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronDown, FaCheck } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    subscribe: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How can sustainable farming increase my profits?',
      answer: 'Sustainable farming can increase profits through multiple avenues: reduced input costs (less fertilizer, pesticides, and water), premium pricing for sustainably grown products, improved soil health leading to better yields over time, and potential access to grants, subsidies, and certification programs that support sustainable agriculture.'
    },
    {
      id: 2,
      question: 'What sustainable farming techniques are best for beginners?',
      answer: 'For beginners, we recommend starting with simple techniques like cover cropping, crop rotation, and composting. These practices are relatively easy to implement, require minimal investment, and provide noticeable benefits to soil health and crop productivity. Our Resources section has beginner-friendly guides on these techniques.'
    },
    {
      id: 3,
      question: 'How long does it take to see the benefits of sustainable farming?',
      answer: 'Some benefits, like reduced water usage or decreased pest pressure, may be noticeable within the first growing season. Other benefits, particularly those related to soil health and biodiversity, typically develop over 2-5 years of consistent sustainable practices. Financial benefits often follow a similar timeline, with initial investments potentially leading to greater profitability in subsequent years.'
    },
    {
      id: 4,
      question: 'Do you offer consulting services for individual farms?',
      answer: 'Yes, we offer personalized consulting services tailored to the specific needs and goals of your farm. Our team of experts can provide guidance on implementing sustainable practices, optimizing profitability, obtaining certifications, and accessing markets. Contact us through this form to discuss your needs and get a quote.'
    },
    {
      id: 5,
      question: 'How can I get involved with your sustainable farming community?',
      answer: 'There are several ways to get involved: subscribe to our newsletter, join our online forum, attend our webinars and virtual events, or participate in our regional farmer networks. We also have volunteer opportunities and occasionally offer internships. Check our Resources page for more information on these opportunities.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      subscribe: false
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="contact-hero-description">
            Have questions about sustainable farming or need personalized advice? Our team of experts is here to help you maximize your farm's potential.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                We're dedicated to helping farmers adopt sustainable practices that increase profitability while preserving the environment. Reach out to us with any questions, concerns, or ideas.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h3>Our Location</h3>
                    <p>Chandigarh University</p>
                    <p>Mohali</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h3>Phone Number</h3>
                    <a href="tel:+15551234567">+91 8427444442</a>
                    <a href="tel:+15559876543">+91 7009707377</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h3>Email Address</h3>
                    <a href="mailto:info@Bhoomi Sahayata.com">info@BhoomiSahayata.com</a>
                    <a href="mailto:support@Bhoomi Sahayata.com">support@BhoomiSahayata.com</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-details">
                    <h3>Working Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              <h3>Follow Us</h3>
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
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              
              {formSubmitted && (
                <div className="success-message">
                  <FaCheck className="success-icon" />
                  <span>Your message has been sent successfully. We'll get back to you soon!</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="subscribe">
                    Subscribe to our newsletter to receive updates on sustainable farming practices, market insights, and resources.
                  </label>
                </div>
                
                <button type="submit" className="btn form-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="accordion">
            {faqs.map(faq => (
              <div className="accordion-item" key={faq.id}>
                <div 
                  className="accordion-header"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown className={`accordion-icon ${activeAccordion === faq.id ? 'open' : ''}`} />
                </div>
                <div className={`accordion-content ${activeAccordion === faq.id ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ContactUs;