import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders footer with copyright information', () => {
    render(<Footer />);
    
    // Check if logo is rendered
    const logoImage = screen.getByAlt('Big Lemon Restaurant Logo');
    expect(logoImage).toBeInTheDocument();
    
    // Check if copyright text is rendered (partial match since year changes)
    const copyrightText = screen.getByText(/Big Lemon Restaurant. All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });
}); 