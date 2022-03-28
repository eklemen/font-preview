import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { appStore } from '../../context/app.context';
import CircleShiplap from '../../assets/shiplapCircles/CircleShiplap';
import CircleWithFlowers from '../../assets/shiplapCircles/CircleWithFlowers';

const SecondSlideCircle = () => {
  const {
    updateProofAttributeAndNextSlide,
  } = useContext(appStore);
  const handleFlowerOption = (hasFlowers=false) => {
    updateProofAttributeAndNextSlide({hasFlowers})
  }
  return (
    <>
      <Col xs={12} sm={12} md={{ span: 4, offset: 2 }} className="d-flex align-items-center flex-column">
        <Button
          variant="light"
          name="no-flowers"
          style={{width: '270px', height: '270px', backgroundColor: '#fff'}}
          onClick={() => handleFlowerOption(false)}
        >
          <CircleShiplap height="100%" width="100%"/>
        </Button>
        <h4>Without Flowers</h4>
      </Col>

      <Col xs={12} sm={12} md={4} className="d-flex align-items-center flex-column">
        <Button
          variant="light"
          name="flowers"
          style={{width: '270px', height: '270px', backgroundColor: '#fff'}}
          onClick={() => handleFlowerOption(true)}
        >
          <CircleWithFlowers height="100%" width="100%"/>
        </Button>
        <h4>With Flowers</h4>
      </Col>
    </>
  );
};

export default SecondSlideCircle;
