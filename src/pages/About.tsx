import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>Welcome to our e-commerce store. We are passionate about providing high-quality products and exceptional customer service.</p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>To make shopping easy, enjoyable, and accessible to everyone.</p>
        </div>
        <div className="about-section">
          <h2>Contact Us</h2>
          <p>Email: support@ourstore.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default About;
