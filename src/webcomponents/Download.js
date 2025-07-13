import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/images/Logo & Title white Png_(1).png';
import Qrcode from '../assets/images/QR Code.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Downloadstyles.css';
import { Footer } from './footer';

export const Download = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

   const [showQR, setShowQR] = useState(false);

     const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.tarana.taranaMusicApp&pcampaignid=web_share';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = 'https://www.apple.com/app-store/';
    } else {
      setShowQR(true);
    }
  };

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
    <Container className="text-center my-5">
  <Row className="justify-content-center">
    <Col xs={12}>
      <img src={logo} alt="Tarana Logo" style={{ width: '321px', height: '84px', opacity: 1 }} />
    </Col>
  </Row>

  <Row className="my-4">
    <Col xs={12}>
      <p className="Download-tarana">Download the Tarana App</p>
    </Col>
  </Row>

  <Row className="mb-3 justify-content-center">
    <Col xs={12} md={10} lg={8} className="text-center">
      <p className="text-light" style={{ fontFamily: 'Clofie', fontWeight: 400, fontSize: '16px' }}>
        Welcome to Tarana — your all-in-one music ecosystem for everyone.
      </p>
    </Col>
  </Row>

  <Row className="mb-3 justify-content-center">
    <Col xs={12} md={10} lg={8} className="text-center">
      <p className="text-light" style={{ fontFamily: 'Clofie', fontWeight: 400, fontSize: '16px' }}>
        Whether you’re an artist, a music organization, or simply love good tunes, Tarana empowers you to discover new talent, connect with creators, collaborate on projects, hire the perfect match, and even earn from your own work — all in one place.
      </p>
    </Col>
  </Row>

  <Row className="mt-4">
    <Col>
      <p style={{ color: '#E7E6E4', fontFamily: 'Clofie', fontWeight: 700, fontSize: '20px' }}>
        Scan to Download
      </p>
    </Col>
  </Row>

  <Row>
    <Col>
      <img src={Qrcode} alt="Tarana QR code" style={{ width: '180px', height: '180px', opacity: 1 }} />
    </Col>
  </Row>
</Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};
