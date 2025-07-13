import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Aboutstyle.css';
import ceoImg from '../assets/images/Dileep.png';
import cmoImg from '../assets/images/laxmi.png';
import dev1Img from '../assets/images/vamsikrishna.png';
import dev2Img from '../assets/images/Vinay.png';
import { Navbar } from './Navbar';
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Aboutus = () => {
  return (
    <div>
        <Navbar />
 
    <div style={{ background: '#1D1918', padding: '60px 0', color: 'white' }}>
      <Container>
       <div>
      <h2 className="about-heading">About US</h2>
    </div>
        <p className="text-center mb-5 aboutpara" style={{ maxWidth: '900px', margin: '0 auto' }}>
          Welcome to Tarana, where music meets innovation! We are a cutting-edge platform that brings together the world of music, creativity, and technology. Tarana is not just another music app; it’s a thriving ecosystem designed to empower musicians, artists, and creative professionals globally.
          <br /><br />
          At Tarana, we believe in the power of collaboration and community. Our platform offers a unique blend of social networking, music streaming, and freelancing tools, all in one place. Whether you are an emerging artist or a seasoned musician, Tarana provides you with the tools to create, share, and monetize your music like never before.
          <br /><br />
          We are proud to offer multi-language support for songs, ensuring your music can reach diverse audiences across the globe. With features like community engagement, collaboration tools, and the chance to work with big names in the industry, Tarana is the place where your musical journey can truly take off.
          <br /><br />
          Join us at Tarana and become a part of the future of music! Let us create, collaborate, and celebrate music together!
        </p>

        <h3 className="team-heading">Meet our Team</h3>
        <Row className="justify-content-center">
          <Col xs={6} md={3} className="team-card">
            <img src={ceoImg} alt="CEO" className="team-img" />
            <div className="badge badge-ceo">Founder & CEO</div>
            <p className="mt-2">Sangi Dileep Chakravarthi</p>
          </Col>

          <Col xs={6} md={3} className="team-card">
            <img src={cmoImg} alt="CMO" className="team-img" />
            <div className="badge badge-cmo">Co-Founder & CMO</div>
            <p className="mt-2">Athmakuri Laxmi Kanth</p>
          </Col>

          <Col xs={6} md={3} className="team-card">
            <img src={dev1Img} alt="Developer" className="team-img" />
            <div className="badge badge-dev">Developer</div>
            <p className="mt-2">Chitturi Vinay Manikanta</p>
          </Col>

          <Col xs={6} md={3} className="team-card">
            <img src={dev2Img} alt="Developer" className="team-img" />
            <div className="badge badge-dev">Developer</div>
            <p className="mt-2">Bavirisetty Vamshi Krishna</p>
          </Col>
        </Row>
      </Container>
    </div>
            <Footer />

</div>
  );
};
