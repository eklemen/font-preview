import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const NavTop = () => {
  return (
    <Navbar className="top-nav">
      <Container>
        <Navbar.Brand href="#home" className="logo-text">
          <img src={logo} alt="logo" width={70} height={70} />
          Petal & Grain
        </Navbar.Brand>
        <div className="d-flex">
          <Nav.Link className="nav-item" as={Link} to="/">
            Fonts
          </Nav.Link>
          <Nav.Link className="nav-item" as={Link} to="/proof">
            Mockup Generator
          </Nav.Link>
          <Nav.Link className="nav-item" target="_blank" href="https://www.etsy.com/shop/PetalAndGrainShop">
            Etsy Shop
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavTop;
