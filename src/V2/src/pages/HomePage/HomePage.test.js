import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

// Mock the child components
jest.mock('../../components/Header/Header', () => () => <div data-testid="header-mock" />);
jest.mock('../../components/Main/Main', () => () => <div data-testid="main-mock" />);
jest.mock('../../components/Footer/Footer', () => () => <div data-testid="footer-mock" />);

describe('HomePage component', () => {
  test('renders Header, Main, and Footer components', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    
    // Check if all components are rendered
    const headerElement = screen.getByTestId('header-mock');
    const mainElement = screen.getByTestId('main-mock');
    const footerElement = screen.getByTestId('footer-mock');
    
    expect(headerElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
}); 