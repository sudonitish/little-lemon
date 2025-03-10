import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  test('renders logo and navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    // Check if logo is rendered
    const logoImage = screen.getByAlt('Big Lemon Restaurant Logo');
    expect(logoImage).toBeInTheDocument();
    
    // Check if restaurant name is rendered
    const restaurantName = screen.getByText('Big Lemon Restaurant');
    expect(restaurantName).toBeInTheDocument();
    
    // Check if navigation links are rendered
    const homeLink = screen.getByText('Home');
    const menuLink = screen.getByText('Menu');
    const bookLink = screen.getByText('Book');
    const aboutLink = screen.getByText('About');
    
    expect(homeLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(bookLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
}); 