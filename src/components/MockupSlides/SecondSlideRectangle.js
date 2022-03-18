import React, { useContext } from 'react';
import { appStore } from '../../context/app.context';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import grayStain from '../../assets/rectangleBoards/graystain.jpg';
import greenStain from '../../assets/rectangleBoards/greenstain.jpg';

const SecondSlideRectangle = () => {
  const { carouselIndex, setCarouselIndex } = useContext(appStore);
  const handleColorComboSelection = (color) => setCarouselIndex(carouselIndex + 1);
  return (
    <Col xs={12}>
      <div className="rect-wrapper">
        <Button variant="light" onClick={() => handleColorComboSelection('blue')}>
          <div className="rect">
            <img className="w-100" src={grayStain} alt="rectangle board option"/>
            <p className="mb-0">Gray/Stain</p>
          </div>
        </Button>
        <Button variant="light" onClick={() => handleColorComboSelection('blue')}>
          <div className="rect">
            <img className="w-100" src={greenStain}  alt="rectangle board option"/>
            <p className="mb-0">Green/Stain</p>
          </div>
        </Button>
      </div>
    </Col>
  );
};

export default SecondSlideRectangle;
