import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';
import { appStore } from '../context/app.context';
import StainSelectModal from './StainSelectModal';

const CircleProof = () => {
  const {
    inputVal,
    scriptColor,
    blockColor,
    proofFont,
    proofBg,
  } = useContext(appStore);
  const bgStyles = proofBg.stain
    ? {
      backgroundImage: `url(${proofBg.color})`
    }
    : {
      backgroundColor: proofBg.color,
      border: proofBg.value === 'white' ?
        '1px solid #aaa' : 'none'
    };
  return (
    <>
      <StainSelectModal />
      <div className="circle mx-auto"
           style={bgStyles}
      >
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
    </>
  );
};

export default CircleProof;
