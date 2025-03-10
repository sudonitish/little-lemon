import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import menuData from '../../utils/mockData/menuData';
import './MenuPage.css';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const categories = Object.keys(menuData);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const renderDietaryIcons = (dietary) => {
    return (
      <div className="dietary-icons">
        {dietary.includes('vegetarian') && (
          <span title="Vegetarian" className="dietary-icon vegetarian">🥗</span>
        )}
        {dietary.includes('vegan') && (
          <span title="Vegan" className="dietary-icon vegan">🌱</span>
        )}
        {dietary.includes('gluten-free') && (
          <span title="Gluten-Free" className="dietary-icon gluten-free">🌾</span>
        )}
      </div>
    );
  };

  return (
    <div className="menu-page">
      <Header />
      <main className="menu-content">
        <div className="menu-header">
          <h1>Our Menu</h1>
          <p>Discover our delicious Mediterranean-inspired dishes</p>
        </div>
        
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="menu-items">
          <h2>{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</h2>
          <div className="menu-grid">
            {menuData[activeCategory].map((item) => (
              <div key={item.id} className="menu-item">
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/logo.png';
                  }} />
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-item-price">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="menu-item-description">{item.description}</p>
                  {renderDietaryIcons(item.dietary)}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="menu-legend">
          <h3>Dietary Information</h3>
          <div className="legend-items">
            <div className="legend-item">
              <span className="dietary-icon vegetarian">🥗</span>
              <span>Vegetarian</span>
            </div>
            <div className="legend-item">
              <span className="dietary-icon vegan">🌱</span>
              <span>Vegan</span>
            </div>
            <div className="legend-item">
              <span className="dietary-icon gluten-free">🌾</span>
              <span>Gluten-Free</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage; 