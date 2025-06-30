import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import logo from '../assets/images/Logo & Title white Png_(1).png';

export const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="banner">
      {/* Blue glow behind buttons */}
      <div className="blue-glow"></div>

      <header className="navbar">
        <div className="logo-box">
          <img src={logo} alt="Tarana Logo" className="logo" />
        </div>

        <div className="nav-box">
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/for-artists">For Artists</Link>
            <Link to="/for-listeners">For Listeners</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/faqs">FAQs</Link>
          </nav>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/for-artists">For Artists</Link>
          <Link to="/for-listeners">For Listeners</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
      )}

      <div className="banner-content">
        <h1>
          <span className="highlight">Tarana</span>
        </h1>
        <p className="subtitle">Your Music. Your People. Your Journey</p>
       <div className="description-box">
  <p className="description">
    The all-in-one music platform that brings{' '}
    <span className="highlight-orange">artistes</span>,{' '}
    <span className="highlight-blue">organizations</span> and fans together like never before
  </p>
</div>


        <div className="buttons">
          <button className="primary-btn">Download Tarana app</button>
          <button className="secondary-btn">Watch demo</button>
        </div>

        <div className="legend">
          <span><span className="dot orange-dot"></span> For Artistes</span>
          <span><span className="dot blue-dot"></span> For Organization</span>
          <span><span className="dot violet-dot"></span> For Fans</span>
        </div>
      </div>
    </div>
  );
};
