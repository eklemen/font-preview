import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { ChevronDown } from 'react-bootstrap-icons';
import { proofBgStains, colourOptions, circleStyles } from '../constants';
import StainOptionTile from './StainOptionTile';
import { appStore } from '../context/app.context';
import Col from 'react-bootstrap/Col';
import FormCheck from 'react-bootstrap/FormCheck';

const StainSelectModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const {
    proofBg,
    proofAttributes,
    updateProofAttributeAndNextSlide
  } = useContext(appStore);
  console.log('on stain select modal-------->', proofAttributes.hasFlowers);
  return (
    <>
      <Row className="justify-content-center mb-3">
        <Col xs={12} sm={6} style={{ maxWidth: 225 }} className="d-flex justify-content-center flex-column">
          <p className="m-0 font-18 text-center">Circle Color</p>
          <Button
            variant="outline-primary"
            onClick={() => setShowModal(true)}
            className="d-flex justify-content-between align-items-center btn-pink"
          >
            <div style={{
              height: 20,
              width: 20,
              ...circleStyles(proofBg)
            }}/>
            <span>{proofBg.label}</span>
            <ChevronDown/>
          </Button>
        </Col>
        <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center">
          <FormCheck
            type="checkbox"
            id="has-flowers-checkbox"
            label="Has Flowers"
            checked={proofAttributes.hasFlowers}
            onChange={(e) => {
              console.log('e.target.checked-------->', e.target.checked);
              updateProofAttributeAndNextSlide({ hasFlowers: !proofAttributes.hasFlowers })
            }}
            style={{ marginTop: '24px' }}
          />
        </Col>
      </Row>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Circle Color
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <h3>Stains</h3>
            {proofBgStains.map((o) => (
              <StainOptionTile
                key={o.value}
                setModalShow
                closeModal={() => setShowModal(false)}
                colorOption={o}/>
            ))}
          </Row>
          <Row>
            <h3>Paints</h3>
            {colourOptions.map((o) => (
              <StainOptionTile
                key={o.value}
                setModalShow
                closeModal={() => setShowModal(false)}
                colorOption={o}/>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StainSelectModal;
