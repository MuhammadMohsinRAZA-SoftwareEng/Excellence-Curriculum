// src/components/home/TeachersSection.js
import React from 'react';
import '../../css/style.css';


const TeachersSection = () => {
  const handleSlider = (direction) => {
    const slider = document.getElementById('teachers-slider');
    const scrollAmount = 300; // Adjust the scroll amount as needed
    if (direction === 'left') {
      slider.scrollLeft -= scrollAmount;
    } else {
      slider.scrollLeft += scrollAmount;
    }
  };

  return (
    <div>
      <h1 className="section-heading">Our Experts</h1>

      <div className="slider-container" id="teachers-slider">
        <div className="teachers-section">
        <div className="teacher-card">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL, replace with actual image URL
          alt="Teacher"
          className="teacher-image"
        />
        <div className="teacher-info">
          <h4 className="teacher-name">John Doe</h4>
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>

      <div className="teacher-card">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL, replace with actual image URL
          alt="Teacher"
          className="teacher-image"
        />
        <div className="teacher-info">
          <h4 className="teacher-name">John Doe</h4>
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>

      <div className="teacher-card">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL, replace with actual image URL
          alt="Teacher"
          className="teacher-image"
        />
        <div className="teacher-info">
          <h4 className="teacher-name">John Doe</h4>
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>

      <div className="teacher-card">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL, replace with actual image URL
          alt="Teacher"
          className="teacher-image"
        />
        <div className="teacher-info">
          <h4 className="teacher-name">John Doe</h4>
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>

      

          {/* Add more teacher cards as needed */}
        </div>
      </div>

      <div className="slider-controls">
        <button onClick={() => handleSlider('left')}>&#8249;</button>
        <button onClick={() => handleSlider('right')}>&#8250;</button>
      </div>
    </div>
  );
};

export default TeachersSection;

