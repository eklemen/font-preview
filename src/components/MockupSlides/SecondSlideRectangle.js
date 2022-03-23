import React, { useContext } from 'react';
import { appStore } from '../../context/app.context';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import grayStainSm from '../../assets/rectangleBoards/graystain-sm.jpg';
import greenStainSm from '../../assets/rectangleBoards/greenstain-sm.jpg';
import { PROOF } from '../../constants';

const SecondSlideRectangle = () => {
  const {
    updateProofAttributeAndNextSlide
  } = useContext(appStore);
  const handleColorComboSelection = (boardColor) => {
    updateProofAttributeAndNextSlide({boardColor});
  }
  return (
    <Col xs={12}>
      <div className="rect-wrapper">
        <Button variant="light" onClick={() => handleColorComboSelection(PROOF.rectangleColors.gray)}>
          <div className="rect">
            <img className="w-100" src={grayStainSm} alt="rectangle board option"/>
            <h4 className="mb-0">Gray/Stain</h4>
          </div>
        </Button>
        <Button variant="light" onClick={() => handleColorComboSelection(PROOF.rectangleColors.green)}>
          <div className="rect">
            <img className="w-100" src={greenStainSm} alt="rectangle board option"/>
            <h4 className="mb-0">Green/Stain</h4>
          </div>
        </Button>
      </div>
    </Col>
  );
};

export default SecondSlideRectangle;
