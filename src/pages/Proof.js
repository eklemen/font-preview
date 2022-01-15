import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavTop from '../components/NavTop';
import WavyBanner from '../components/WavyBanner';

const Proof = () => {
  return (
    <>
      <NavTop/>
      <div className="mb-5 pb-5">
        <WavyBanner/>
        <Container>
          <Row>Hi</Row>
        </Container>
      </div>
    </>
  );
};

export default Proof;
