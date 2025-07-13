import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import taranalogo from '../assets/images/Footerlogo.png';
import playstore from '../assets/images/playstore.svg';
import appstore from '../assets/images/appstore.svg';
import youtube from '../assets/images/youtube.png';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkedin.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footerstyle.css';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1D1918', color: '#fff', padding: '50px 0' }}>
      <Container>
        {/* Top Footer */}
        <Row className="border-top pt-4">

          {/* Left */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <img src={taranalogo} alt="Tarana Logo" style={{ width: '120px', marginBottom: '16px' }} />
            <p style={{ fontSize: '14px' }}>Building the most efficient music ecosystem</p>
            <div className="d-flex gap-3 mt-3 flex-wrap">
              <img src={youtube} alt="YouTube" style={{ width: '24px', cursor: 'pointer' }} />
              <img src={twitter} alt="Twitter" style={{ width: '24px', cursor: 'pointer' }} />
              <img src={facebook} alt="Facebook" style={{ width: '24px', cursor: 'pointer' }} />
              <img src={instagram} alt="Instagram" style={{ width: '24px', cursor: 'pointer' }} />
              <img src={linkedin} alt="LinkedIn" style={{ width: '24px', cursor: 'pointer' }} />
            </div>
          </Col>

          {/* Middle */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <p>Tarana Media Private Limited</p>
            <p>Hyderabad, Telangana, India</p>
            <p>CIN: U72900TG2021OPC151126</p>
            <p>hey@taranamusic.in</p>
          </Col>

          {/* Right */}
          <Col lg={4} md={12}>
            <Row>
              <Col xs={6} className="mb-3">
                <ul className="list-unstyled">
                  <li>Terms of Use</li>
                  <li>Community Guidelines</li>
                  <li>FAQ'S</li>
                </ul>

                <div className="d-flex flex-lg-row flex-md-row flex-column align-items-center gap-2">
                  <p className="mb-0" style={{ fontSize: '14px' }}>Download App</p>
                  <div className="d-flex flex-lg-row flex-md-row flex-column gap-2">
                    <img src={playstore} alt="Google Play" style={{ width: '120px', cursor: 'pointer' }} />
                    <img src={appstore} alt="App Store" style={{ width: '120px', cursor: 'pointer' }} />
                  </div>
                </div>
              </Col>

              <Col xs={6} className="mb-3">
                <ul className="list-unstyled">
                  <li>Content Policies</li>
                  <li>Privacy Policies</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
            </Row>
          </Col>

        </Row>

        {/* Bottom Footer */}
        <Row className="text-center mt-4 border-top pt-3">
          <Col>
            <p style={{ fontSize: '13px', color: '#ccc' }}>
              © 2024 Tarana Media Private Limited. All rights are reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
