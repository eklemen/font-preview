import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavTop = () => {
  return (
    <Navbar className="top-nav">
      <Container>
        <Navbar.Brand href="#home">Petal & Grain</Navbar.Brand>
        <Nav.Link className="nav-item" href="https://www.etsy.com/shop/PetalAndGrainShop">
          Etsy Shop
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavTop;
