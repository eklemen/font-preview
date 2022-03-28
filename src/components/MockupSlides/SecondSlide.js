import React, { forwardRef, useContext } from 'react';
import Row from 'react-bootstrap/Row';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Col from 'react-bootstrap/Col';
import { appStore } from '../../context/app.context';
import { PROOF } from '../../constants';
import SecondSlideCircle from './SecondSlideCircle';
import SecondSlideRectangle from './SecondSlideRectangle';

const SecondSlide = forwardRef(({ ...rest }, ref) => {
  const { proofAttributes } = useContext(appStore);
  const isCircle = proofAttributes.boardShape === PROOF.shape.circle;
  return (
    <CarouselItem ref={ref} {...rest}>
      <div
        className="w-100"
        style={{
          height: 'auto',
          minHeight: '340px',
          display: 'flex',
          paddingBottom: '45px',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Row className="w-100" style={{
          alignItems: 'center',
          height: 'auto',
        }}>
          <Col xs={12} className="text-center">
            {
              isCircle
                ? <h4 className="text-black">Add flowers to your circle?</h4>
                : <h4 className="text-black">Pick a color/stain combo?</h4>
            }
          </Col>
          {
            isCircle
            ? <SecondSlideCircle />
            : <SecondSlideRectangle />
          }
        </Row>
      </div>
    </CarouselItem>
  );
});

export default SecondSlide;
