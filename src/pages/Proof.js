import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavTop from '../components/NavTop';
import WavyBanner from '../components/WavyBanner';
import ProofHeader from '../components/ProofHeader';
import './proof.scss';
import MockupWizard from '../components/MockupWizard';
import CircleProof from '../components/CircleProof';
import NameInputs from '../components/NameInputs';
import { appStore } from '../context/app.context';
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
              ? <Row className="d-flex flex-lg-row-reverse">
                {
                  proofAttributes.boardShape === PROOF.shape.circle
                    ? <Col xs={12} lg={6}><CircleProof /></Col>
                    : <Col xs={12} lg={6}><RectangleProof /></Col>
                }
                <Col xs={12} className="mt-3 d-lg-none">
                  <h4 className="text-center">- Edit options below -</h4>
                </Col>
                <Col xs={12} sm={12} lg={6}>
                  <NameInputs
                    handleChange={handleNameChange}
                    handleColorChange={handleColorChange}
                    mobile
                    stacked
                  />
                </Col>
              </Row>
              : <MockupWizard />
          }
        </Container>
      </div>
    </>
  );
};

export default Proof;
