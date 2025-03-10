import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitForm(formData)) {
      navigate('/confirmed-booking');
    }
  };

  const currentDate = new Date().toISOString().split('T')[0];
  const occasions = ['Birthday', 'Anniversary', 'Business'];

  return (
    <form className="booking-form" onSubmit={handleSubmit} data-testid="booking-form">
      <h2>Reserve Your Table</h2>
      <div className="form-columns">
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="date">Choose date</label>
            <input
              type="date"
              id="date"
              name="date"
              min={currentDate}
              value={formData.date}
              onChange={handleInputChange}
              required
              aria-label="Choose date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Choose time</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              aria-label="Choose time"
            >
              <option value="">Select a time</option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleInputChange}
              required
              aria-label="Number of guests"
            />
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleInputChange}
              required
              aria-label="Occasion"
            >
              {occasions.map(occasion => (
                <option key={occasion} value={occasion}>{occasion}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <button 
        type="submit" 
        className="submit-button"
        aria-label="Submit reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm; 