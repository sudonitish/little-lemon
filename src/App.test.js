import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the page components
jest.mock('./pages/HomePage', () => () => <div data-testid="home-page" />);
jest.mock('./pages/BookingPage', () => () => <div data-testid="booking-page" />);
jest.mock('./pages/NotFound', () => () => <div data-testid="not-found-page" />);
jest.mock('./pages/UnderConstruction', () => () => <div data-testid="under-construction-page" />);

// Mock useLocation to control the current path
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockImplementation(() => ({
    pathname: '/'
  })),
  BrowserRouter: ({ children }) => children,
  Routes: ({ children }) => children,
  Route: ({ path, element }) => {
    // Render the element for the root path
    if (path === '/') {
      return element;
    }
    return null;
  }
}));

test('renders HomePage for root path', () => {
  render(<App />);
  const homePage = screen.getByTestId('home-page');
  expect(homePage).toBeInTheDocument();
}); 