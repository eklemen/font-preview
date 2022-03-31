import React, { useContext } from 'react';
import FormCheck from 'react-bootstrap/FormCheck';
import { appStore } from '../context/app.context';
import { PROOF } from '../constants';

const ShapeSelectRadios = () => {
  const {
    proofAttributes,
    updateProofAttributeAndNextSlide,
  } = useContext(appStore);
  const { shape } = PROOF;
  return (
    <div className="pt-3 mb-2">
      <FormCheck
        inline
        type="radio"
        aria-label="Circle shaped board"
        id="circle-board-radio"
        name="board-shape"
        onChange={() => {
          updateProofAttributeAndNextSlide({
            boardShape: shape.circle
          }, false)
        }}
        checked={proofAttributes.boardShape === shape.circle}
        label="Circle"
      />
      <FormCheck
        inline
        type="radio"
        aria-label="Rectangle shaped board"
        id="rectangle-board-radio"
        name="board-shape"
        onChange={() => {
          updateProofAttributeAndNextSlide({
            boardShape: shape.rectangle
          }, false)
        }}
        checked={proofAttributes.boardShape === shape.rectangle}
        label="Rectangle"
      />
    </div>
  );
};

export default ShapeSelectRadios;
