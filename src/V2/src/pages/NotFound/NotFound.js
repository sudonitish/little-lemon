import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <Header />
      <main className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="back-home">Back to Home</Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound; 