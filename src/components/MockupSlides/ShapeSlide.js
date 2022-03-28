import React, { forwardRef, useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { appStore } from '../../context/app.context';
import { PROOF } from '../../constants';
import CircleShiplap from '../../assets/shiplapCircles/CircleShiplap';
import blankRectangleBoard from '../../assets/rectangleBoards/blankRectangle.png';

const ShapeSlide = forwardRef(({ ...rest }, ref) => {
  const {
    updateProofAttributeAndNextSlide,
  } = useContext(appStore);
  const handleShape = (boardShape) => {
    updateProofAttributeAndNextSlide({boardShape})
  };
  return (
    <CarouselItem ref={ref} {...rest}>
      <div
        className="w-100"
        style={{
          height: 'auto',
          display: 'flex',
          paddingBottom: '45px'
        }}
      >
        <Row className="w-100" style={{
          alignItems: 'center'
        }}>
          <Col xs={12} className="text-center">
            <h4 className="text-black">Let's start with board shape.</h4>
          </Col>
          <Col xs={12} sm={12} md={{ span: 4, offset: 2 }} className="d-flex align-items-center flex-column">
            <Button
              variant="light"
              name="circle"
              onClick={() => handleShape(PROOF.shape.circle)}
              style={{maxWidth: '230px', backgroundColor: '#fff'}}
            >
              <CircleShiplap height="100%" width="100%"/>
            </Button>
            <h4>Circle</h4>
          </Col>

          <Col xs={12} sm={12} md={4} className="d-flex align-items-center flex-column">
            <Button
              variant="light"
              name="rectangle"
              style={{maxWidth: '350px', backgroundColor: '#fff'}}
              onClick={() => handleShape(PROOF.shape.rectangle)}
            >
              <img className="w-100" src={blankRectangleBoard}  alt="rectangle board option"/>
            </Button>
            <h4>Rectangle</h4>
          </Col>
        </Row>
      </div>
      {/*<Carousel.Caption>*/}
      {/*  */}
      {/*</Carousel.Caption>*/}
    </CarouselItem>
  );
});

export default ShapeSlide;
