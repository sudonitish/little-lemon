import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

// Mock the child components
jest.mock('../../components/Header/Header', () => () => <div data-testid="header-mock" />);
jest.mock('../../components/Footer/Footer', () => () => <div data-testid="footer-mock" />);

describe('NotFound component', () => {
  test('renders 404 page with header and footer', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    
    // Check if header and footer are rendered
    const headerElement = screen.getByTestId('header-mock');
    const footerElement = screen.getByTestId('footer-mock');
    
    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
    
    // Check if 404 content is rendered
    const notFoundHeading = screen.getByText('404');
    const pageNotFoundText = screen.getByText('Page Not Found');
    const errorMessage = screen.getByText("The page you are looking for doesn't exist or has been moved.");
    const backHomeLink = screen.getByText('Back to Home');
    
    expect(notFoundHeading).toBeInTheDocument();
    expect(pageNotFoundText).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
    expect(backHomeLink).toBeInTheDocument();
  });
}); 