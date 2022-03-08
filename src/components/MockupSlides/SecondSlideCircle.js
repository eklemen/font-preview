import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { appStore } from '../../context/app.context';

const SecondSlideCircle = () => {
  const {
    carouselIndex,
    setCarouselIndex,
    setProofAttributes,
    proofAttributes
  } = useContext(appStore);
  const handleFlowerOption = (hasFlowers=false) => {
    setProofAttributes({
      ...proofAttributes,
      hasFlowers,
    })
    setCarouselIndex(carouselIndex+1);
  }
  return (
    <>
      <Col xs={12} sm={12} md={{ span: 4, offset: 2 }} className="d-flex align-items-center flex-column">
        <Button
          variant="light"
          name="no-flowers"
          onClick={handleFlowerOption}
          style={{
            border: 'solid 3px black',
            borderRadius: '50%',
            height: '150px',
            width: '150px'
          }}
        >
        </Button>
        <h4>Without Flowers</h4>
      </Col>

      <Col xs={12} sm={12} md={4} className="d-flex align-items-center flex-column mb-5">
        <Button
          variant="light"
          name="flowers"
          onClick={() => handleFlowerOption(true)}
          style={{
            border: 'solid 3px black',
            borderRadius: '50%',
            height: '150px',
            width: '150px'
          }}
        >
        </Button>
        <h4>With Flowers</h4>
      </Col>
    </>
  );
};

export default SecondSlideCircle;
