export const fontRegistry = [
  {
    fontFamily: 'Aldedesign-WisdomMerry',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'Apricots-Regular',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'Awanstudio-Aubrielle-Regular',
    script: true,
    size: 3.5,
  },
  {
    fontFamily: 'Bralyn',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'BrittanySignature',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'CultivatedMind-GardenGrownBCaps',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'Datalegreya-Dot',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'Dmitrii Chirkov-Joshico-Regular',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'Fikryal-HelloSnowflake',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'Gistesy',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'hellohoney',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'JeffLevine-InlineRetroJNL',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'Khurasan-Sheenaz',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'KimberlyGeswein-KGRiseUP',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'LoveloBlack',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'MadinaClean',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'MadinaCleanOrnaments',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'MegaType-KameliaScript-Regular',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'MegaType-YasmineGardner',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'Pompiere-Regular',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'Putracetol-CavilayScript',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'Raleway-Medium',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'Samtype-HebrewKarina-Regular',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'SansAndSons-MonthoersSignature',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'SoftMaker-TypewriterSerial',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'SophiaRonald',
    script: true,
    size: 2,
  },
  {
    fontFamily: 'Typesketchbook-BetmRounded-ExtraLight',
    script: false,
    size: 2,
  },
  {
    fontFamily: 'ZaneStudio-HelloSunriseScript',
    script: true,
    size: 2,
  }
];

export const getScriptFonts = fontRegistry
  .filter(({script}) => script);

export const getBlockFonts = fontRegistry
  .filter(({script}) => !script);
