import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { proofBgStains, colourOptions } from '../constants';
import StainOptionTile from './StainOptionTile';

const StainSelectModal = () => {
  const [lgShow, setLgShow] = React.useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
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
                colorOption={o} />
            ))}
          </Row>
          <Row>
            <h3>Paints</h3>
            {colourOptions.map((o) => (
              <StainOptionTile
                key={o.value}
                colorOption={o} />
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StainSelectModal;
