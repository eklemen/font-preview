import React, { useContext } from 'react';
import Select from 'react-select';
import { appStore } from '../context/app.context';

const FontSelect = ({name}) => {
  const {
    scriptFonts,
    blockFonts,
    onProofFontSelect,
  } = useContext(appStore);
  const fontOpts = [...scriptFonts, ...blockFonts].map((
    {
      displayName, ...rest
    }) => ({label: displayName, value: displayName, ...rest}))
  return (
    <Select
      options={fontOpts}
      className="mt-4"
      defaultValue={
        name === 'firstName'
          ? fontOpts[0]
          : fontOpts.find(({script}) => !script)
      }
      onChange={(e) => onProofFontSelect(e, name)}
      styles={{
        option: (styles, { data }) => ({
          ...styles,
          fontFamily: data.fontFamily,
          fontSize: `${data.size*0.50}em`,
          ...data.styles
        })
      }}
    />
  );
};

export default FontSelect;
