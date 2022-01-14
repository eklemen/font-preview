import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart } from 'react-bootstrap-icons';
import logo from '../assets/logo.svg';

const WavyBanner = () => {
  return (
    <div className="bg-top">
      <Container>
        <Row>
          <Col sm={6} style={{ fontFamily: 'Raleway' }}>
            <h1 style={{ fontFamily: 'Raleway', fontWeight: 'bold' }}>Font Preview</h1>
            <h3>Tips for selecting fonts</h3>
            <ul>
              <li>Enter your name into each box below</li>
              <li>Most popular combinations are:
                <ul>
                  <li>girl names -> script first name and block middle names</li>
                  <li>boy names -> block first name and script middle names</li>
                </ul>
              </li>
              <li>Ultimately, choose what you LOVE best. </li>
              <li>Click the heart icon <Heart/> to favorite fonts to compare at the end</li>
            </ul>
          </Col>
          <Col sm={6}>
            <img src={logo} alt="logo" style={{height: '100%', width: '100%'}}/>
          </Col>
        </Row>
      </Container>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave-border">
        <path d="M0.00,49.98 C149.99,150.00 243.79,-13.31 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: 'none' }}/>
      </svg>
    </div>
  );
};

export default WavyBanner;
