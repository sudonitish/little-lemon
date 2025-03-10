import React, { useReducer } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BookingForm from '../../components/BookingForm/BookingForm';
import { fetchAPI, submitAPI } from '../../utils/api';
import './BookingPage.css';

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

const initializeTimes = () => {
  return fetchAPI(new Date());
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    return submitAPI(formData);
  };

  return (
    <div className="booking-page">
      <Header />
      <main className="booking-content">
        <div className="booking-hero">
          <div className="booking-hero-content">
            <h1>Reserve Your Table</h1>
            <p>Join us for an unforgettable Mediterranean dining experience</p>
          </div>
        </div>
        <div className="booking-container">
          <div className="booking-info">
            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Opening Hours</h3>
              <p>Mon - Fri: 2pm - 10pm</p>
              <p>Sat: 2pm - 11pm</p>
              <p>Sun: 2pm - 9pm</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Contact</h3>
              <p>Phone: (123) 456-7890</p>
              <p>Email: reservations@littlelemon.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>123 Mediterranean Street</p>
              <p>City, State 12345</p>
            </div>
          </div>
          <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage; 