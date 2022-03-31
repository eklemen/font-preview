import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import { appStore } from '../context/app.context';
import grayStain from '../assets/rectangleBoards/graystain.jpg'
import greenStain from '../assets/rectangleBoards/greenstain.jpg'
import { PROOF } from '../constants';
import ShapeSelectRadios from './ShapeSelectRadios';

const RectangleProof = () => {
  const {
    inputVal,
    scriptColor,
    blockColor,
    proofFont,
    proofAttributes,
    updateProofAttributeAndNextSlide,
  } = useContext(appStore);
  const { rectangleColors } = PROOF;
  const calculateDefaultValue = () => {
    const {gray, green} = rectangleColors;
    if ([gray, green].includes(proofAttributes.boardColor)) {
      const label = proofAttributes.boardColor === gray
        ? 'Gray/Stain'
        : 'Green/Stain';
      return {
        value: proofAttributes.boardColor,
        label,
      }
    } else {
      return {value: gray, label: 'Gray/Stain'};
    }
  };
  return (
    <>
      <Row>
        <Col xs={12}>
          <ShapeSelectRadios />
        </Col>
        <Col xs={12} sm={6} className="mb-5">
          <Select
            defaultValue={calculateDefaultValue()}
            onChange={(e) => {
              updateProofAttributeAndNextSlide({
                boardColor: e.value
              }, false)
            }}

            options={[
              {
                label: 'Gray/Stain',
                value: rectangleColors.gray,
              },
              {
                label: 'Green/Stain',
                value: rectangleColors.green,
              }
            ]}
          />
        </Col>
      </Row>
      <div
        className="rectangle-proof-wrapper mx-auto"
        style={{
          backgroundImage: proofAttributes.boardColor === rectangleColors.gray ? `url(${grayStain})` : `url(${greenStain})`
        }}
      >
        <Textfit
          mode="single"
          forceSingleModeWidth={true}
          className="first-name rectangle-proof text-shadow"
          throttle={300}
          style={{
            color: scriptColor.color,
            fontFamily: proofFont.firstName.fontFamily,
          }}
        >
          {inputVal.firstName}
        </Textfit>
        <Textfit
          mode="single"
          forceSingleModeWidth={true}
          className="middle-name rectangle-proof text-shadow"
          throttle={300}
          style={{
            color: blockColor.color,
            fontFamily: proofFont.middleName.fontFamily,
          }}
        >
          {inputVal.middleName}
        </Textfit>
      </div>
    </>
  );
};

export default RectangleProof;
