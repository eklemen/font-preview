import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProofHeader = () => {
  return (
    <Row>
      <Col sm={7} style={{ fontFamily: 'Raleway' }} className="d-flex justify-content-center flex-column">
        <h1 style={{ fontFamily: 'Raleway', fontWeight: 'bold' }}>Mockup Generator</h1>
        <h4>Note: This is a mock up tool used to give an approximation of a product. Placement and colors may vary.</h4>
      </Col>
    </Row>
  );
};

export default ProofHeader;
