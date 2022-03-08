import React, { useContext } from 'react';
import { appStore } from '../../context/app.context';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const SecondSlideRectangle = () => {
  const { carouselIndex, setCarouselIndex } = useContext(appStore);
  return (
    <Col xs={12}>
      <div className="rect-wrapper">
        <Button variant="light" onClick={({target}) => {
          console.log('clicked-------->', target);
        }}>
          <div className="rect">
            <svg viewBox="0 0 200 85" width="100%" height="100%" className="rect-svg">
              <rect width="200" height="85"/>
            </svg>
            <p className="mb-0">Blue/Mocha</p>
          </div>
        </Button>
        <Button variant="light" onClick={({target}) => {
          console.log('clicked-------->', target);
        }}>
          <div className="rect">
            <svg viewBox="0 0 200 85" width="100%" height="100%" className="rect-svg">
              <rect width="200" height="85"/>
            </svg>
            <p className="mb-0">Blue/Mocha</p>
          </div>
        </Button>
        <Button variant="light" onClick={({target}) => {
          console.log('clicked-------->', target);
        }}>
          <div className="rect">
            <svg viewBox="0 0 200 85" width="100%" height="100%" className="rect-svg">
              <rect width="200" height="85"/>
            </svg>
            <p className="mb-0">Blue/Mocha</p>
          </div>
        </Button>
      </div>
    </Col>
  );
};

export default SecondSlideRectangle;
