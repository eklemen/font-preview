import antiqueWhite from './assets/stains/antique-white.png';
import earlyAmerican from './assets/stains/early-american.png';
import ebony from './assets/stains/ebony.png';
import englishChestnut from './assets/stains/english-chestnut.png';
import goldenPecan from './assets/stains/golden-pecan.png';
import jacobean from './assets/stains/jacobean.png';
import rose from './assets/stains/rose.png';
import weatheredGrey from './assets/stains/weathered-grey.png';
import willowGrey from './assets/stains/willow-grey.png';

export const colourOptions = [
  { value: 'black', label: 'Black', color: '#000000', stain: false },
  { value: 'white', label: 'White', color: '#ffffff', stain: false },
  { value: 'grey', label: 'Grey', color: '#b1adaa', stain: false },
  { value: 'blush', label: 'Blush', color: '#e7cdd1', stain: false },
  { value: 'pink', label: 'Pink', color: '#fcd5d9', stain: false },
  { value: 'coral', label: 'Coral', color: '#f86b62', stain: false },
  { value: 'red', label: 'Red', color: '#cc1722', stain: false },
  { value: 'magenta', label: 'Magenta', color: '#9d0058', stain: false },
  { value: 'lilac', label: 'Lilac', color: '#9d9be0', stain: false },
  { value: 'mist', label: 'Mist', color: '#d8f5df', stain: false },
  { value: 'aqua', label: 'Aqua', color: '#5fcee6', stain: false },
  { value: 'turquoise', label: 'Turquoise', color: '#00c2da', stain: false },
  { value: 'french blue', label: 'French Blue', color: '#91bace', stain: false },
  { value: 'navy', label: 'Navy', color: '#001b4a', stain: false },
  { value: 'hunter', label: 'Hunter', color: '#2d443c', stain: false },
  { value: 'apple', label: 'Apple', color: '#becc74', stain: false },
  { value: 'yellow', label: 'yellow', color: '#f3da6e', stain: false },
]


export const proofBgStains = [
  {
    label: 'Antique White',
    value: 'antiqueWhite',
    color: antiqueWhite,
    stain: true
  },
  {
    label: 'Early American',
    value: 'earlyAmerican',
    color: earlyAmerican,
    stain: true
  },
  {
    label: 'Ebony',
    value: 'ebony',
    color: ebony,
    stain: true
  },
  {
    label: 'English Chestnut',
    value: 'englishChestnut',
    color: englishChestnut,
    stain: true
  },
  {
    label: 'Golden Pecan',
    value: 'goldenPecan',
    color: goldenPecan,
    stain: true
  },
  {
    label: 'Jacobean',
    value: 'jacobean',
    color: jacobean,
    stain: true
  },
  {
    label: 'Rose',
    value: 'rose',
    color: rose,
    stain: true
  },
  {
    label: 'Weathered Grey',
    value: 'weatheredGrey',
    color: weatheredGrey,
    stain: true
  },
  {
    label: 'Willow Grey',
    value: 'willowGrey',
    color: willowGrey,
    stain: true
  }
];

export const circleStyles = (opt) => {
  if (opt.label === 'White') console.log(opt)
  return opt.stain
    ? {
      backgroundImage: `url(${opt.color})`,
      borderRadius: '50%',
    }
    : {
      backgroundColor: opt.color,
      border: opt.label === 'White' ?
        '1px solid #aaa' : 'none',
      borderRadius: '50%',
    }
}
