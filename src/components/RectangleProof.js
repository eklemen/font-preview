import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';
import { appStore } from '../context/app.context';
import grayStain from '../assets/rectangleBoards/graystain.jpg'

const RectangleProof = () => {
  const {
    inputVal,
    scriptColor,
    blockColor,
    proofFont,
  } = useContext(appStore);
  return (
    <div
      className="rectangle-proof-wrapper mx-auto"
      style={{
        backgroundImage: `url(${grayStain})`
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
  );
};

export default RectangleProof;
