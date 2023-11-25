// src/components/common/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL + './excellencecurriculum/src/assets/logo.png'}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#courses"><strong>Courses</strong></Nav.Link>
            <Nav.Link href="#curriculum"><strong>My Curriculum</strong></Nav.Link>
            <Nav.Link href="#about"><strong>About us</strong></Nav.Link>
            <Nav.Link href="#contact"><strong>Contact us</strong></Nav.Link>
            <Nav.Link href="#logout"><strong>Logout</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
