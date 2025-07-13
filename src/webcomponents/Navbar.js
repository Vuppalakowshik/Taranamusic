import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/images/Logo & Title white Png_(1).png';
import Qrcode from '../assets/images/QR Code.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Downloadstyles.css';
import { Footer } from './footer';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);



  return (
    <div className="download-page">
      {/* Navbar */}
      <header className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#301E1E' }}>
        <div>
          <img src={logo} alt="Tarana Logo" className="logo" style={{ width: '180px' }} />
        </div>

        <nav className="d-none d-md-flex gap-4 nav-links">
          <Link to="/">Home</Link>
          <Link to="/for-artists">Features</Link>
          <Link to="/for-listeners">About us</Link>
        </nav>

        <div className="hamburger d-md-none" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu d-flex flex-column text-center">
          <Link to="/">Home</Link>
          <Link to="/for-artists">Features</Link>
          <Link to="/for-listeners">About us</Link>
        </div>
      )}

      {/* Main Content */}
   
      {/* Footer */}
     
    </div>
  );
};
