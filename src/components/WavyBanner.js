import React from 'react';
import Container from 'react-bootstrap/Container';

const WavyBanner = ({header}) => {
  return (
    <div className="bg-top">
      <Container>
        {header}
      </Container>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave-border">
        <path d="M0.00,49.98 C149.99,150.00 243.79,-13.31 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: 'none' }}/>
      </svg>
    </div>
  );
};

export default WavyBanner;
