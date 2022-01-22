import React, { createContext, useState } from 'react';
import { getBlockFonts, getScriptFonts } from '../fontRegistry';

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
    handleNameChange,
    handleColorChange,
    onProofFontSelect,
  }}>
    {children}
  </Provider>;
};

export { appStore, AppProvider };
