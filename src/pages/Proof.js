import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavTop from '../components/NavTop';
import WavyBanner from '../components/WavyBanner';
import ProofHeader from '../components/ProofHeader';
import './proof.scss';
import CircleProof from '../components/CircleProof';
import NameInputs from '../components/NameInputs';

const Proof = () => {
  return (
    <>
      <NavTop/>
      <div className="mb-5 pb-5">
        <WavyBanner header={<ProofHeader/>}/>
        <Container>
          <Row>
            <NameInputs mobile />
          </Row>
          <Row>
            <Col xs={12}>
              <CircleProof />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Proof;
