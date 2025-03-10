import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <main className="main-content">
      <section className="promo-banner">
        <h2>30% Off This Weekend</h2>
        <p>Enjoy delicious meals at discounted prices this weekend only!</p>
      </section>
      <section className="info-section">
        <article className="info-card">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
            alt="Our New Menu"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/logo.png";
            }}
          />
          <div className="info-content">
            <h3>Our New Menu</h3>
            <p>Discover our latest delicious dishes!</p>
            <Link to="/menu">See our menu</Link>
          </div>
        </article>
        <article className="info-card">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt="Book a Table"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/logo.png";
            }}
          />
          <div className="info-content">
            <h3>Book a Table</h3>
            <p>Reserve your spot and enjoy an unforgettable dining experience.</p>
            <Link to="/book">Book your table now</Link>
          </div>
        </article>
        <article className="info-card">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
            alt="Opening Hours"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/logo.png";
            }}
          />
          <div className="info-content">
            <h3>Opening Hours</h3>
            <p>Mon - Fri: 2pm - 10pm<br />Sat: 2pm - 11pm<br />Sun: 2pm - 9pm</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main; 