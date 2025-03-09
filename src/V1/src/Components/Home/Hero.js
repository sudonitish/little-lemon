import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section className="hero section__padding">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        <Link to="/booking">  <button className="reserve-button">Reserve a Table</button></Link>
        </div>
        <div className="hero-image">
          <img src= "Images/image-1.png" alt="Food dish" />
        </div>
      </div>
    </section>
  )
}

export default Hero

