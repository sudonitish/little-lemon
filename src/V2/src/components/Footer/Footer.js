import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <img src="/images/logo-white.png" alt="Little Lemon Restaurant Logo" />
          <p>Mediterranean cuisine with a modern twist. Experience the flavors of the Mediterranean in every bite.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/book">Reservations</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <ul className="footer-links">
            <li>Monday - Friday: 2pm - 10pm</li>
            <li>Saturday: 2pm - 11pm</li>
            <li>Sunday: 2pm - 9pm</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li>123 Mediterranean Street</li>
            <li>City, State 12345</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 