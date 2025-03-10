import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  const renderBookingForm = () => {
    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={mockAvailableTimes} 
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields', () => {
    renderBookingForm();
    
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('validates required fields', () => {
    renderBookingForm();
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    expect(screen.getByLabelText(/choose date/i)).toBeRequired();
    expect(screen.getByLabelText(/choose time/i)).toBeRequired();
    expect(screen.getByLabelText(/number of guests/i)).toBeRequired();
    expect(screen.getByLabelText(/occasion/i)).toBeRequired();
  });

  test('updates available times when date changes', () => {
    renderBookingForm();
    
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '2024-03-10' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: '2024-03-10'
    });
  });

  test('submits form with correct data', () => {
    renderBookingForm();
    
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(dateInput, { target: { value: '2024-03-10' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2024-03-10',
      time: '17:00',
      guests: '4',
      occasion: 'Birthday'
    });
  });
}); 