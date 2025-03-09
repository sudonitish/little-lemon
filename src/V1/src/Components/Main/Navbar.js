import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (

    <nav className="navbar section__padding">
      <div className="navbar-container">
        <div className="logo">
          <img src="Images/Logo.svg" alt="Little Lemon Logo" />
        </div>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/specials">Menu</Link></li>
          <li className="nav-item"><Link to="/booking">Reservations</Link></li>
          <li className="nav-item"><Link to="#">Order Online</Link></li>
          <li className="nav-item"><Link to="#">Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

