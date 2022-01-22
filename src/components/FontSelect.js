import React, { useContext, useEffect } from 'react';
import Select from 'react-select';
import { appStore } from '../context/app.context';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
}
const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span style={{
      fontSize: '1.5em',
    }}>{data.label}</span>
    <hr style={{width: '68%'}}/>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const FontSelect = ({name}) => {
  const {
    scriptFonts,
    blockFonts,
    setProofFont,
    onProofFontSelect,
  } = useContext(appStore);
  const formatForSelectComponent = (arr) => arr.map((
    {
      displayName, ...rest
    }) => ({label: displayName, value: displayName, ...rest}))
  const scriptMap = formatForSelectComponent(scriptFonts);
  const blockMap = formatForSelectComponent(blockFonts);
  useEffect(() => {
    const firstName = scriptMap.find(({favorite}) => favorite) || scriptMap[0]
    const middleName = blockMap.find(({favorite}) => favorite) || blockMap[0]
    setProofFont({
      firstName,
      middleName,
    });
  }, []);
  const groupedOptions = [
    {
      label: 'Favorites',
      options: [...scriptMap, ...blockMap].filter(({favorite}) => favorite),
    },
    {
      label: 'Script Fonts',
      options: scriptMap,
    },
    {
      label: 'Block Fonts',
      options: blockMap,
    },
  ];
  return (
    <Select
      options={groupedOptions}
      className="mt-4"
      defaultValue={
        name === 'firstName'
          ? (scriptMap.find(({favorite}) => favorite) || scriptMap[0])
          : (blockMap.find(({favorite}) => favorite) || blockMap[0])
      }
      onChange={(e) => onProofFontSelect(e, name)}
      formatGroupLabel={formatGroupLabel}
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
