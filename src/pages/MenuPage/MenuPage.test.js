import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MenuPage from './MenuPage';

// Mock the child components
jest.mock('../../components/Header/Header', () => () => <div data-testid="header-mock" />);
jest.mock('../../components/Footer/Footer', () => () => <div data-testid="footer-mock" />);

// Mock the menu data
jest.mock('../../utils/mockData/menuData', () => ({
  __esModule: true,
  default: {
    appetizers: [
      {
        id: 1,
        name: "Bruschetta",
        description: "Grilled bread with tomatoes",
        price: 8.99,
        image: "/images/bruschetta.jpg",
        category: "appetizers",
        dietary: ["vegetarian"]
      }
    ],
    mains: [
      {
        id: 5,
        name: "Lemon Chicken",
        description: "Grilled chicken with lemon",
        price: 18.99,
        image: "/images/lemon-chicken.jpg",
        category: "mains",
        dietary: ["gluten-free"]
      }
    ]
  }
}));

describe('MenuPage component', () => {
  test('renders header, menu content, and footer', () => {
    render(
      <BrowserRouter>
        <MenuPage />
      </BrowserRouter>
    );
    
    // Check if header and footer are rendered
    const headerElement = screen.getByTestId('header-mock');
    const footerElement = screen.getByTestId('footer-mock');
    
    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
    
    // Check if menu title is rendered
    const menuTitle = screen.getByText('Our Menu');
    expect(menuTitle).toBeInTheDocument();
    
    // Check if category tabs are rendered
    const appetizersTab = screen.getByText('Appetizers');
    const mainsTab = screen.getByText('Mains');
    
    expect(appetizersTab).toBeInTheDocument();
    expect(mainsTab).toBeInTheDocument();
    
    // Check if menu items are rendered
    const bruschettaItem = screen.getByText('Bruschetta');
    expect(bruschettaItem).toBeInTheDocument();
    
    // Test category switching
    fireEvent.click(mainsTab);
    
    // Check if mains category is now active
    const lemonChickenItem = screen.getByText('Lemon Chicken');
    expect(lemonChickenItem).toBeInTheDocument();
  });
}); 