// src/components/home/WhoWeAre.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

const WhoWeAre = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Who we are</h1>
      <Row>
        <Col>
          {/* Image goes here */}
        </Col>
        <Col>
          <p>Dummy text. Replace with actual text later.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhoWeAre;
