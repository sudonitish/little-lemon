import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BookingPage from './pages/BookingPage/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking/ConfirmedBooking';
import MenuPage from './pages/MenuPage/MenuPage';
import NotFound from './pages/NotFound/NotFound';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App; 