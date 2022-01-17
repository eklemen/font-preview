import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';
import { appStore } from '../context/app.context';

const CircleProof = () => {
  const {
    inputVal,
  } = useContext(appStore);
  console.log('inputVal-------->', inputVal);
  return (
    <div className="circle">
      <Textfit
        mode="single"
        forceSingleModeWidth={false}
        className="first-name"
        throttle={300}
      >
        {inputVal.firstName}
      </Textfit>
      <Textfit
        mode="single"
        forceSingleModeWidth={false}
        className="middle-name"
        throttle={300}
      >
        {inputVal.middleName}
      </Textfit>
    </div>
  );
};

export default CircleProof;
