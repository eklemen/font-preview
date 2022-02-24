import React from 'react';
import Col from 'react-bootstrap/Col';
import { Heart } from 'react-bootstrap-icons';
import logo from '../assets/logo.svg';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const FontPreviewHeader = () => {
  return (
    <Row>
      <Col md={7} style={{ fontFamily: 'Raleway' }}>
        <h1 style={{ fontFamily: 'Raleway', fontWeight: 'bold' }}>Font Preview</h1>
        <h3>Tips for selecting fonts</h3>
        <ul className="font-18">
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
        <Link to="proof" style={{textDecoration: 'none', fontSize: '24px'}}>
          Go to Mockup Preview Tool >
        </Link>
      </Col>
      <Col md={5}>
        <img src={logo} alt="logo" style={{height: '100%', width: '100%'}}/>
      </Col>
    </Row>
  );
};

export default FontPreviewHeader;
