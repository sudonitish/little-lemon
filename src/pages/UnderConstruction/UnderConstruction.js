import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <Header />
      <main className="construction-content">
        <h1>🚧 Under Construction 🚧</h1>
        <p>We're working hard to bring you something amazing!</p>
        <p>Please check back soon.</p>
        <Link to="/" className="back-home">Back to Home</Link>
      </main>
      <Footer />
    </div>
  );
};

export default UnderConstruction; 