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
  const handleNameChange = ({ target }) => {
    if (!target.value.length) {
      setInputVal({
        ...inputVal,
        [target.name]: 'Your Name'
      });
    } else {
      setInputVal({
        ...inputVal,
        [target.name]: target.value
      });
    }
  };
  const handleColorChange = ({script, ...rest}) => {
    script ? setScriptColor(rest) : setBlockColor(rest);
  };
  return <Provider value={{
    inputVal, setInputVal,
    scriptFonts, setScriptFonts,
    blockFonts, setBlockFonts,
    scriptColor, setScriptColor,
    blockColor, setBlockColor,
    handleNameChange,
    handleColorChange,
  }}>
    {children}
  </Provider>;
};

export { appStore, AppProvider };
