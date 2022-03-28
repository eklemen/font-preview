import React, { createContext, useState } from 'react';
import { getBlockFonts, getScriptFonts } from '../fontRegistry';
import { PROOF, proofBgStains } from '../constants';

const initialState = {};
const appStore = createContext(initialState);
const { Provider } = appStore;
const defaultBlack = { value: 'black', label: 'Black', color: '#000000'};

const AppProvider = ({ children }) => {
  const [inputVal, setInputVal] = useState({
    firstName: 'First',
    middleName: 'Middle'
  });
  const [scriptFonts, setScriptFonts] = useState(getScriptFonts);
  const [blockFonts, setBlockFonts] = useState(getBlockFonts);
  const [scriptColor, setScriptColor] = useState(defaultBlack);
  const [blockColor, setBlockColor] = useState(defaultBlack);
  const [proofFont, setProofFont] = useState({
    firstName: {},
    middleName: {},
  });
  const [proofBg, setProofBg] = useState(proofBgStains[0]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [proofAttributes, setProofAttributes] = useState({
    boardShape: PROOF.shape.circle,
    boardColor: proofBgStains[0],
    hasFlowers: false,
    furthestIndex: 0,
  });
  const [hideWizard, setHideWizard] = useState(false);
  const updateProofAttributeAndNextSlide = (attr={}) => {
    setProofAttributes({
      ...proofAttributes,
      ...attr
    });
    setCarouselIndex(carouselIndex + 1);
  };
  const handleNameChange = ({ target }) => {
    setInputVal({
      ...inputVal,
      [target.name]: target.value
    });
  };
  const handleColorChange = ({script, ...rest}) => {
    script ? setScriptColor(rest) : setBlockColor(rest);
  };
  const onProofFontSelect = (e, name) => {
    setProofFont({
      ...proofFont,
      [name]: e
    });
  };
  return <Provider value={{
    inputVal, setInputVal,
    scriptFonts, setScriptFonts,
    blockFonts, setBlockFonts,
    scriptColor, setScriptColor,
    blockColor, setBlockColor,
    proofFont, setProofFont,
    proofBg, setProofBg,
    proofAttributes, setProofAttributes,
    carouselIndex, setCarouselIndex,
    hideWizard, setHideWizard,
    handleNameChange,
    handleColorChange,
    onProofFontSelect,
    updateProofAttributeAndNextSlide,
  }}>
    {children}
  </Provider>;
};

export { appStore, AppProvider };
