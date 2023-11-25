// src/components/common/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

const AppFooter = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Dummy Address</p>
            <p>Dummy Phone: +123 456 7890</p>
            <p>Dummy Email: info@example.com</p>
          </Col>
          <Col md={6}>
            <Row>
              {/* <Col>
                <Nav.Link href="#courses">Courses</Nav.Link>
                <Nav.Link href="#curriculum">My Curriculum</Nav.Link>
                <Nav.Link href="#about">About us</Nav.Link>
                <Nav.Link href="#contact">Contact us</Nav.Link>
                <Nav.Link href="#logout">Logout</Nav.Link>
              </Col> */}
              <Col>
                <p>Dummy text line 1</p>
                <p>Dummy text line 2</p>
                <p>Dummy text line 3</p>
                <p>Dummy text line 4</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;
