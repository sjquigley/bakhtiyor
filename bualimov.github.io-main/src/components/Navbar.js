import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for Navbar styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">Bakhtiyor Alimov</Link>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/education" className="navbar-link">Education</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="navbar-link">Projects</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
