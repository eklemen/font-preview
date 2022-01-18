import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';
import { appStore } from '../context/app.context';

const CircleProof = () => {
  const {
    inputVal,
    scriptColor,
    blockColor,
    proofFont,
  } = useContext(appStore);
  return (
    <div className="circle mx-auto">
      <Textfit
        mode="single"
        forceSingleModeWidth={true}
        className="first-name"
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
        className="middle-name"
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

export default CircleProof;
