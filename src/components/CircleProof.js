import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';
import { appStore } from '../context/app.context';

const CircleProof = () => {
  const {
    inputVal,
    scriptColor,
    blockColor,
  } = useContext(appStore);
  return (
    <div className="circle">
      <Textfit
        mode="single"
        forceSingleModeWidth={true}
        className="first-name"
        throttle={300}
        style={{
          color: scriptColor.color
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
          color: blockColor.color
        }}
      >
        {inputVal.middleName}
      </Textfit>
    </div>
  );
};

export default CircleProof;
