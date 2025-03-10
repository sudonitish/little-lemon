import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UnderConstruction from './UnderConstruction';

// Mock the child components
jest.mock('../../components/Header/Header', () => () => <div data-testid="header-mock" />);
jest.mock('../../components/Footer/Footer', () => () => <div data-testid="footer-mock" />);

describe('UnderConstruction component', () => {
  test('renders under construction page with header and footer', () => {
    render(
      <BrowserRouter>
        <UnderConstruction />
      </BrowserRouter>
    );
    
    // Check if header and footer are rendered
    const headerElement = screen.getByTestId('header-mock');
    const footerElement = screen.getByTestId('footer-mock');
    
    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
    
    // Check if under construction content is rendered
    const constructionHeading = screen.getByText('🚧 Under Construction 🚧');
    const workingHardText = screen.getByText("We're working hard to bring you something amazing!");
    const checkBackText = screen.getByText('Please check back soon.');
    const backHomeLink = screen.getByText('Back to Home');
    
    expect(constructionHeading).toBeInTheDocument();
    expect(workingHardText).toBeInTheDocument();
    expect(checkBackText).toBeInTheDocument();
    expect(backHomeLink).toBeInTheDocument();
  });
}); 