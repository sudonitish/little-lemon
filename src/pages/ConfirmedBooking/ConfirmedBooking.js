import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking">
      <Header />
      <main className="confirmation-content">
        <div className="confirmation-card">
          <div className="success-icon">✓</div>
          <h1>Booking Confirmed!</h1>
          <p className="confirmation-message">
            Thank you for choosing Little Lemon Restaurant. Your table has been successfully reserved.
          </p>
          <p className="confirmation-details">
            You will receive a confirmation email with your booking details shortly.
          </p>
          <div className="confirmation-actions">
            <Link to="/menu" className="menu-button">View Our Menu</Link>
            <Link to="/" className="home-button">Return to Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConfirmedBooking; 