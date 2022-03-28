import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavTop from '../components/NavTop';
import WavyBanner from '../components/WavyBanner';
import ProofHeader from '../components/ProofHeader';
import './proof.scss';
import MockupWizard from '../components/MockupWizard';
import CircleProof from '../components/CircleProof';
import NameInputs from '../components/NameInputs';
import { appStore } from '../context/app.context';
import Summary from '../components/Summary';
import { PROOF } from '../constants';
import RectangleProof from '../components/RectangleProof';

const Proof = () => {
  const {
    handleNameChange,
    handleColorChange,
    hideWizard,
    proofAttributes,
  } = useContext(appStore);
  return (
    <>
      <NavTop/>
      <div className="mb-5 pb-5">
        <WavyBanner header={<ProofHeader/>}/>
        <Container>
          {
            hideWizard
              ? <Row>
                <Col xs={12} sm={12} md={6}>
                  <NameInputs
                    handleChange={handleNameChange}
                    handleColorChange={handleColorChange}
                    mobile
                    stacked
                  />
                </Col>
                <Col xs={12} sm={12} md={6}>
                  {
                    proofAttributes.boardShape === PROOF.shape.circle
                    ? <CircleProof />
                    : <RectangleProof />
                  }
                  {/*<Summary />*/}
                </Col>
              </Row>
              : <MockupWizard />
          }
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
