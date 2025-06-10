import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, but the page you're looking for doesn't exist.</p>
        <Link to="/" className="error-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
