import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

describe('Main component', () => {
  test('renders promotional banner and information sections', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    
    // Check if promotional banner is rendered
    const promoHeading = screen.getByText('30% Off This Weekend');
    const promoText = screen.getByText('Enjoy delicious meals at discounted prices this weekend only!');
    expect(promoHeading).toBeInTheDocument();
    expect(promoText).toBeInTheDocument();
    
    // Check if information sections are rendered
    const menuHeading = screen.getByText('Our New Menu');
    const bookingHeading = screen.getByText('Book a Table');
    const hoursHeading = screen.getByText('Opening Hours');
    
    expect(menuHeading).toBeInTheDocument();
    expect(bookingHeading).toBeInTheDocument();
    expect(hoursHeading).toBeInTheDocument();
    
    // Check if links are rendered
    const menuLink = screen.getByText('See our menu');
    const bookingLink = screen.getByText('Book your table now');
    
    expect(menuLink).toBeInTheDocument();
    expect(bookingLink).toBeInTheDocument();
  });
}); 