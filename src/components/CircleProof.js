import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';
import { appStore } from '../context/app.context';
import StainSelectModal from './StainSelectModal';
import { circleStyles } from '../constants';
import CircleShiplap from '../assets/shiplapCircles/CircleShiplap';
import CircleShiplapWithFlowers from '../assets/shiplapCircles/CircleWithFlowers';

const CircleProof = () => {
  const {
    inputVal,
    scriptColor,
    blockColor,
    proofFont,
    proofBg,
    proofAttributes,
  } = useContext(appStore);
  return (
    <>
      <StainSelectModal />
      <div className="circle mx-auto"
           style={circleStyles(proofBg)}
      >
        {
          proofAttributes.hasFlowers
          ? <CircleShiplapWithFlowers />
          : <CircleShiplap />
        }
        <Textfit
          mode="single"
          forceSingleModeWidth={true}
          className="first-name text-shadow"
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
          className="middle-name text-shadow"
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
