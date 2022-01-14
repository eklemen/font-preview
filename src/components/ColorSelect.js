import React from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';



const colourOptions = [
  { value: 'black', label: 'Black', color: '#000000'},
  { value: 'blush', label: 'Blush', color: '#e7cdd1' },
  { value: 'pink', label: 'Pink', color: '#fcd5d9'},
  { value: 'coral', label: 'Coral', color: '#f86b62' },
  { value: 'magenta', label: 'Magenta', color: '#9d0058' },
  { value: 'lilac', label: 'Lilac', color: '#9d9be0' },
  { value: 'mist', label: 'Mist', color: '#d8f5df' },
  { value: 'aqua', label: 'Aqua', color: '#5fcee6' },
  { value: 'turquoise', label: 'Turquoise', color: '#00c2da' },
  { value: 'french blue', label: 'French Blue', color: '#91bace' },
  { value: 'navy', label: 'Navy', color: '#001b4a' },
  { value: 'hunter', label: 'Hunter', color: '#2d443c' },
  { value: 'apple', label: 'Apple', color: '#becc74' },
  { value: 'yellow', label: 'yellow', color: '#f3da6e' },
  { value: 'red', label: 'Red', color: '#cc1722' },
  { value: 'white', label: 'White', color: '#ffffff' },
  { value: 'grey', label: 'Grey', color: '#b1adaa' },
]

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

const ColorSelect = ({ onChange, script }) => (
  <Select
    defaultValue={colourOptions[0]}
    options={colourOptions}
    styles={colourStyles}
    onChange={(e) => onChange({...e, script})}
  />
);

export default ColorSelect;
