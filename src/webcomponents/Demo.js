import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {Navbar} from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import demoImage from '../assets/images/Joinasindividual (2).png'; // your demo mobile image asset
import Demoimage1 from '../assets/images/joinassvg.svg'
import { Footer } from './footer';
import './Demostyle.css';

export const Demo = () => {
  const demoItems = [
    { id: 1, title: 'Join as an Individual', image: demoImage },
    { id: 2, title: 'Join as an Individual', image: demoImage },
    { id: 3, title: 'Join as an Individual', image: demoImage },
    { id: 4, title: 'Join as an Individual', image: demoImage },
  ];

  return (
     <div>
            <Navbar/>
       
    <div style={{ background: '#1D1918', padding: '60px 0' }}>
       
        <Container>
          <h2 className="text-center mb-4" style={{ fontSize: '36px', fontWeight: '700', background: 'linear-gradient(90deg, #E6543A 0%, #D389B8 50%, #2688C7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Dive into the Tarana Experience
          </h2>

        <p className="text-center text-light mb-5" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '16px' }}>
          Welcome to our demo hall, where short, snappy videos will walk you through every corner of Tarana’s vibrant music ecosystem. Press play and see how easy it is to discover, connect, collaborate, hire, and earn… all in one place!
        </p>

      <Row className="g-4">
  {demoItems.map((item) => (
    <Col key={item.id} xs={12} sm={6} lg={3}>
      <Card style={{ background: 'transparent', border: 'none', textAlign: 'center' }}>
        <Card.Img
          variant="top"
          src={item.image}
          style={{ borderRadius: '16px', padding: '8px', background: '#000' }}
        />
        <Card.Body>
          <Card.Text className="text-light" style={{ fontWeight: '600' }}>
            {item.title}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

      </Container>
    </div>
    <Footer/>
    </div>
  );
};
