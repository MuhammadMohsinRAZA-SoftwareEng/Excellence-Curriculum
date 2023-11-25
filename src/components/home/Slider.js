// src/components/home/Slider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path-to-image1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Text on Image 1</h3>
          <p>Additional text on Image 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Repeat for other images */}
    </Carousel>
  );
};

export default Slider;
