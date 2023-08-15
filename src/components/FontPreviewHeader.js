import React from 'react';
import Col from 'react-bootstrap/Col';
import { Heart } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const FontPreviewHeader = () => {
  return (
    <Row>
      <Col md={7} style={{ fontFamily: 'Neutraface-Text-Book' }}>
        <h1 style={{ fontFamily: 'Neutraface-Text-Book', fontWeight: 'bold' }}>Font Preview</h1>
        <h3>Tips for selecting fonts</h3>
        <ul className="font-18">
          <li>Enter your name into each box below</li>
          <li>Click the heart icon <Heart/> to favorite fonts to compare at the end</li>
          <li>Ultimately, choose what you LOVE best. </li>
        </ul>
        <Link to="proof" style={{textDecoration: 'none', fontSize: '24px'}}>
          <Button type="button" variant="outline-secondary">
            Go to Mockup Preview Tool
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default FontPreviewHeader;
