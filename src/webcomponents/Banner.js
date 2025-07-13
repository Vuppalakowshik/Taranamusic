import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/images/Logo & Title white Png_(1).png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';

export const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Android device — go to Play Store
      window.location.href = 'https://play.google.com/store/apps/details?id=com.tarana.taranaMusicApp&pcampaignid=web_share';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS device — go to App Store
      window.location.href = 'https://www.apple.com/app-store/';
    } else {
      // Desktop or others — navigate to download page
      navigate('/download');
    }
  };

  return (
    <div className="banner position-relative">
      <div className="blue-glow"></div>

      <header className="d-flex justify-content-between align-items-center p-4">
        <div className="logo-box">
          <img src={logo} alt="Tarana Logo" className="logo" />
        </div>

        <nav className="nav-box d-none d-md-flex nav-links gap-4">
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

      {menuOpen && (
        <div className="mobile-menu d-flex flex-column text-center">
          <Link to="/">Home</Link>
          <Link to="/for-artists">Features</Link>
          <Link to="/for-listeners">About us</Link>
        </div>
      )}

      <Container className="banner-content text-center py-5">
        <Row>
          <Col>
            <h1><span className="highlight">Tarana</span></h1>
            <p className="subtitle">Your Music. Your People. Your Journey</p>

            <div className="description-box my-4">
              <p className="description">
                The all-in-one music platform that brings{' '}
                <span className="highlight-orange">artistes</span>,{' '}
                <span className="highlight-blue">organizations</span>, and <span className="highlight-pink">fans</span> together like never before.
              </p>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-4">
              <Button className="download-btn" onClick={handleDownload}>
                Download Tarana App
              </Button>
              <Link to="/demo">
    <Button className="secondary-btn">Watch demo</Button>
  </Link>
            </div>

            <div className="legend d-flex justify-content-center flex-wrap gap-3 mt-4">
              <span><span className="dot orange-dot"></span> For Artistes</span>
              <span><span className="dot blue-dot"></span> For Organization</span>
              <span><span className="dot violet-dot"></span> For Fans</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
