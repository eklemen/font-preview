import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HeartFill } from 'react-bootstrap-icons';

const WavyBanner = () => {
  return (
    <div className="bg-top">
      <Container>
        <Row>
          <h1 style={{ fontFamily: 'Raleway', fontWeight: 'bold' }}>Font Preview</h1>
        </Row>
        <Row>
          <Col style={{ fontFamily: 'Raleway' }}>
            <h3>Tips for selecting fonts</h3>
            <ul>
              <li>Type your name into each input below</li>
              <li>Left column are script fonts</li>
              <li>Right column are block fonts</li>
              <li>Typically girl's names are script first name and block middle names</li>
              <li>Typically boy's names are block first names and script middle names</li>
              <li>Click the heart icon <HeartFill/> to favorite fonts to compare later</li>
            </ul>
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
