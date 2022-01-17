import React from 'react';
import { Textfit } from 'react-textfit';

const CircleProof = () => {
  return (
    <div className="circle">
      <Textfit
        mode="single"
        forceSingleModeWidth={false}
        className="first-name"
        throttle={300}
      >
        Alexandra
      </Textfit>
      <Textfit
        mode="single"
        forceSingleModeWidth={false}
        className="middle-name"
        throttle={300}
      >
        Jane
      </Textfit>
    </div>
  );
};

export default CircleProof;
