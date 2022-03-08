import React from 'react';
import Container from 'react-bootstrap/Container';
import NavTop from '../components/NavTop';
import WavyBanner from '../components/WavyBanner';
import ProofHeader from '../components/ProofHeader';
import './proof.scss';
import MockupWizard from '../components/MockupWizard';

const Proof = () => {
  return (
    <>
      <NavTop/>
      <div className="mb-5 pb-5">
        <WavyBanner header={<ProofHeader/>}/>
        <Container>
          <MockupWizard />
          {/*<Row>*/}
          {/*  <Col xs={12} sm={12} md={6}>*/}
          {/*    <NameInputs*/}
          {/*      handleChange={handleNameChange}*/}
          {/*      handleColorChange={handleColorChange}*/}
          {/*      mobile*/}
          {/*      stacked*/}
          {/*    />*/}
          {/*  </Col>*/}
          {/*  <Col xs={12} sm={12} md={6}>*/}
          {/*    <CircleProof />*/}
          {/*    <Summary />*/}
          {/*  </Col>*/}
          {/*</Row>*/}
        </Container>
      </div>
    </>
  );
};

export default Proof;
