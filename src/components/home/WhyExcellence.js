// src/components/home/WhyExcellence.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

const WhyExcellence = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Why Excellence Curriculum</h1>
      <p className="text-center mb-4">Dummy text. Replace with actual text later.</p>
      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/card-image1.jpg" />
            <Card.Body>
              <Card.Title>Card 1 Title</Card.Title>
              <Card.Text>
                Dummy text for Card 1. Replace with actual content later.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/card-image2.jpg" />
            <Card.Body>
              <Card.Title>Card 2 Title</Card.Title>
              <Card.Text>
                Dummy text for Card 2. Replace with actual content later.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/card-image3.jpg" />
            <Card.Body>
              <Card.Title>Card 3 Title</Card.Title>
              <Card.Text>
                Dummy text for Card 3. Replace with actual content later.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/card-image4.jpg" />
            <Card.Body>
              <Card.Title>Card 4 Title</Card.Title>
              <Card.Text>
                Dummy text for Card 4. Replace with actual content later.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/card-image5.jpg" />
            <Card.Body>
              <Card.Title>Card 5 Title</Card.Title>
              <Card.Text>
                Dummy text for Card 5. Replace with actual content later.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyExcellence;
