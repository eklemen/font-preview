import React, { forwardRef, useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { appStore } from '../../context/app.context';
import { PROOF } from '../../constants';

const ShapeSlide = forwardRef(({ ...rest }, ref) => {
  const {
    proofAttributes,
    setProofAttributes,
    carouselIndex,
    setCarouselIndex,
  } = useContext(appStore);
  const handleShape = (boardShape) => {
    setProofAttributes({
      ...proofAttributes,
      boardShape,
      furthestIndex: carouselIndex+1 > proofAttributes.furthestIndex ? carouselIndex+1 : proofAttributes.furthestIndex,
    })
    setCarouselIndex(carouselIndex+1);
  };
  return (
    <Carousel.Item ref={ref} {...rest}>
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
          <Col xs={12} sm={12} md={{ span: 4, offset: 2 }} className="d-flex align-items-center flex-column">
            <Button
              variant="light"
              name="circle"
              onClick={() => handleShape(PROOF.shape.circle)}
              style={{
                border: 'solid 3px black',
                borderRadius: '50%',
                height: '150px',
                width: '150px'
              }}
            >
            </Button>
            <h4>Circle</h4>
          </Col>

          <Col xs={12} sm={12} md={4} className="d-flex align-items-center flex-column" style={{marginBottom: '46px'}}>
            <Button
              variant="light"
              name="rectangle"
              onClick={() => handleShape(PROOF.shape.rectangle)}
              style={{
                border: 'solid 3px black',
                borderRadius: '5px',
                height: '150px',
                width: '270px'
              }}
            >
            </Button>
            <h4>Rectangle</h4>
          </Col>
        </Row>
      </div>
      <Carousel.Caption>
        <h4 className="text-black">Let's start with board shape.</h4>
      </Carousel.Caption>
    </Carousel.Item>
  );
});

export default ShapeSlide;
