// src/components/home/CoursesCategories.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

const CoursesCategories = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Courses Categories</h1>
      <p className="text-center mb-4">Dummy text. Replace with actual text later.</p>
      <Row className="mb-4">
        <Col>
          <Button variant="primary" className="rounded-pill mr-2">
            Button 1
          </Button>
          <Button variant="primary" className="rounded-pill mr-2">
            Button 2
          </Button>
          <Button variant="primary" className="rounded-pill mr-2">
            Button 3
          </Button>
          <Button variant="primary" className="rounded-pill">
            Button 4
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" className="rounded-pill mr-2">
            Button 5
          </Button>
          <Button variant="primary" className="rounded-pill mr-2">
            Button 6
          </Button>
          <Button variant="primary" className="rounded-pill">
            Button 7
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursesCategories;
