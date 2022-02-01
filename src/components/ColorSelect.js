import React from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import { colourOptions } from '../constants';

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 3,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 14,
    width: 14,
    border: color === '#ffffff' ? '1px solid black' : 'none'
  },
});

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isFocused ? chroma(data.color).alpha(0.8).css() : data.color,
      color: chroma.contrast(color, 'white') > 4
        ? 'white'
        : 'black',
      cursor: 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: isSelected
          ? data.color
          : color.alpha(0.3).css(),
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const ColorSelect = ({ onChange, script, selectedColor }) => (
  <Select
    defaultValue={selectedColor || colourOptions[0]}
    options={colourOptions}
    styles={colourStyles}
    onChange={(e) => onChange({...e, script})}
  />
);

export default ColorSelect;
