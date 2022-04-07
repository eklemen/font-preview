import React, { forwardRef, useContext } from 'react';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Button from 'react-bootstrap/Button';
import { appStore } from '../../context/app.context';

const DisclaimerSlide = forwardRef(({ ...rest }, ref) => {
  const {
    updateProofAttributeAndNextSlide
  } = useContext(appStore);
  return (
    <CarouselItem ref={ref} {...rest}>
      <div className="d-flex flex-column justify-content-center align-items-center disclaimer-slide" style={{height: '335px'}}>
        <div className="text-center w-75 mb-2">
          <h5 className="text-center">Creating a mockup online is for illustrative purposes only. This is to give you a general idea of what fonts and colors look like together. This may not reflect the actual product. If you would like an official proof, I would be happy to provide one after an order is placed.</h5>
          <small>By clicking the button below you are verifying you have read and understand the disclaimer above.</small>
        </div>
        <Button onClick={() => updateProofAttributeAndNextSlide()}>
          Let's get started!
        </Button>
      </div>
    </CarouselItem>
  );
});

export default DisclaimerSlide;
