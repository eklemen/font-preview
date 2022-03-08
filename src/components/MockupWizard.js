import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import ShapeSlide from './MockupSlides/ShapeSlide';
import SecondSlide from './MockupSlides/SecondSlide';
import { appStore } from '../context/app.context';

const MockupWizard = () => {
  const { carouselIndex, setCarouselIndex } = useContext(appStore);
  return (
    <Row>
      <Carousel
        activeIndex={carouselIndex}
        interval={null}
        wrap={false}
        variant="dark"
        onSelect={setCarouselIndex}
      >
        <ShapeSlide />
        <SecondSlide />
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*<Col xs={12} sm={12} md={{ span: 4, offset: 2 }} className="d-flex align-items-center flex-column">*/}
      {/*  <Button*/}
      {/*    variant="light"*/}
      {/*    name="circle"*/}
      {/*    onClick={(e) => {*/}
      {/*      debugger;*/}
      {/*      console.log(e)*/}
      {/*    }}*/}
      {/*    style={{*/}
      {/*      border: 'solid 3px black',*/}
      {/*      borderRadius: '50%',*/}
      {/*      height: '150px',*/}
      {/*      width: '150px'*/}
      {/*    }}*/}
      {/*  >*/}
      {/*  </Button>*/}
      {/*  <h4>Circle</h4>*/}
      {/*</Col>*/}

      {/*<Col xs={12} sm={12} md={4} className="d-flex align-items-center flex-column">*/}
      {/*  <Button*/}
      {/*    variant="light"*/}
      {/*    name="rectangle"*/}
      {/*    onClick={(e) => {*/}
      {/*      debugger;*/}
      {/*      console.log(e)*/}
      {/*    }}*/}
      {/*    style={{*/}
      {/*      border: 'solid 3px black',*/}
      {/*      borderRadius: '5px',*/}
      {/*      height: '150px',*/}
      {/*      width: '270px'*/}
      {/*    }}*/}
      {/*  >*/}
      {/*  </Button>*/}
      {/*  <h4>Rectangle</h4>*/}
      {/*</Col>*/}
    </Row>
  );
};

export default MockupWizard;
