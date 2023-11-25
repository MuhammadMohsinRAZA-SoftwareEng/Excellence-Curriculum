// src/components/home/CoursesCategories.js
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

const CoursesCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Computing Core Courses');

  const categories = [
    'Computing Core Courses',
    'Computing Supporting Area Elective Courses',
    'General Education Courses',
    'University Elective Courses',
    'Information Technology Core Courses',
    'Information Technology Supporting Courses',
    'Contents of Information Technology Elective Courses',
  ];

  const courses = {
    'Computing Core Courses': [
      'Programming Fundamentals',
      'Object Oriented Programming...',
      'Discrete Structures',
      'Data Structures and Algorithms',
      'Digital Logic and Design',
      'Operating Systems',
      'Database Systems',
      'Software Engineering',
      'Computer Communication and Networks',
      'Human-Computer Interaction',
      'Capstone Project',
    ],
    'Computing Supporting Area Elective Courses': [
      'Calculus and Analytical Geometry',
      'Probability and Statistics',
      'Linear Algebra',
      'Basic Electronics',
    ],
    'General Education Courses': [
      'Functional English',
      'Communication Skills',
      'Technical Report Writing',
      'Islamic Studies',
      'Pakistan Studies',
      'Introduction to Information & Communication Technologies',
      'Professional Practices',
    ],
    'University Elective Courses': [
      'Introduction to Accounting',
      'Principles of Management',
      'Human Resources Management',
      'Principles of Philosophy',
      'Foreign/Regional Language',
      'Entrepreneurship',
    ],
    'Information Technology Core Courses': [
      'Web Systems and Technologies',
      'Multimedia Systems and Design',
      'Systems and Network Administration',
      'Data & Network Security',
      'Cloud Computing',
      'System Integration and Architecture',
      'Technology Management',
    ],
    'Information Technology Supporting Courses': [
      'IT Project Management',
      'Internet Architecture and Protocols',
      'Object Oriented Analysis and Design',
      'Database Administration & Management',
      'Information Systems',
    ],
    'Contents of Information Technology Elective Courses': [
      'Enterprise Resource Planning Systems',
      'Information Technology Infrastructure',
      'Network Programming',
      'Network Design and Management',
      'Artificial Intelligence',
      'Routing & Switching',
      'Introduction to Broadband Communication Systems',
      'Mobile Application Development',
      'Enterprise Application Development',
      'E-Commerce Applications Development',
      'Computer Game Development',
      '3D Modeling & Animation',
      'Web Engine',
      'Semantic Web Techniques',
      'Mobile Computing',
      'Data Warehousing',
      'Data Mining',
      'Business Intelligence and Analytics',
      'Advance Database Management',
      'Information Systems Auditing and Assurance',
      'Business Process Management',
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Courses Categories</h1>
      <Row className="mb-4">
        {categories.map((category) => (
          <Col key={category}>
            <Button
              variant={selectedCategory === category ? 'success' : 'primary'}
              className="rounded-pill mb-2"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          {courses[selectedCategory] && (
            <ul>
              {courses[selectedCategory].map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CoursesCategories;
