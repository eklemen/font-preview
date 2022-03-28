import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import ShapeSlide from './MockupSlides/ShapeSlide';
import SecondSlide from './MockupSlides/SecondSlide';
import { appStore } from '../context/app.context';
import NameSlide from './MockupSlides/NameSlide';

const  MockupWizard = ({className}) => {
  const { carouselIndex, setCarouselIndex } = useContext(appStore);
  return (
    <Row className={className}>
      <Carousel
        activeIndex={carouselIndex}
        interval={null}
        wrap={false}
        variant="dark"
        onSelect={setCarouselIndex}
      >
        <ShapeSlide />
        <SecondSlide />
        <NameSlide />
      </Carousel>
    </Row>
  );
};

export default MockupWizard;
