import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './BookingPage';
import { fetchAPI } from '../../utils/api';

// Mock the child components
jest.mock('../../components/Header/Header', () => () => <div data-testid="header-mock" />);
jest.mock('../../components/Footer/Footer', () => () => <div data-testid="footer-mock" />);
jest.mock('../../components/BookingForm/BookingForm', () => () => <div data-testid="booking-form-mock" />);

jest.mock('../../utils/api');

describe('BookingPage', () => {
  beforeEach(() => {
    fetchAPI.mockReturnValue(['17:00', '18:00', '19:00']);
  });

  test('renders Header, BookingForm, and Footer components', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    
    // Check if all components are rendered
    const headerElement = screen.getByTestId('header-mock');
    const bookingFormElement = screen.getByTestId('booking-form-mock');
    const footerElement = screen.getByTestId('footer-mock');
    
    expect(headerElement).toBeInTheDocument();
    expect(bookingFormElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  test('initializes with available times', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    expect(fetchAPI).toHaveBeenCalled();
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();
  });
}); 