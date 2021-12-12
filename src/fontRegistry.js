export const fontRegistry = [
  {
    fontFamily: 'Aldedesign-WisdomMerry',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Apricots-Regular',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Awanstudio-Aubrielle-Regular',
    script: true,
    size: 3.5,
    favorite: false,
  },
  {
    fontFamily: 'Bralyn',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'BrittanySignature',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'CultivatedMind-GardenGrownBCaps',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Datalegreya-Dot',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Dmitrii Chirkov-Joshico-Regular',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Fikryal-HelloSnowflake',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Gistesy',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'hellohoney',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'JeffLevine-InlineRetroJNL',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Khurasan-Sheenaz',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'KimberlyGeswein-KGRiseUP',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'LoveloBlack',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'MadinaClean',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'MadinaCleanOrnaments',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'MegaType-KameliaScript-Regular',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'MegaType-YasmineGardner',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Pompiere-Regular',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Putracetol-CavilayScript',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Raleway-Medium',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Samtype-HebrewKarina-Regular',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'SansAndSons-MonthoersSignature',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'SoftMaker-TypewriterSerial',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'SophiaRonald',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Typesketchbook-BetmRounded-ExtraLight',
    script: false,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'ZaneStudio-HelloSunriseScript',
    script: true,
    size: 2,
    favorite: false,
  },
  ///////////////////
  {
    fontFamily: 'Alegreya-Regular',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'BebasNeue-Regular',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Fontforecast-SaltAndSpicesMonoBold',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Hanoded-LemonYellowSunExtraBoldRegular',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'Lemonthe-CaltonEleganceScript',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'LibreBaskerville-Regular',
    script: true,
    size: 2,
    favorite: false,
  },
  {
    fontFamily: 'MalisiaScript',
    script: true,
    size: 2,
    favorite: false,
  }
];

export const getScriptFonts = fontRegistry
  .filter(({script}) => script);

export const getBlockFonts = fontRegistry
  .filter(({script}) => !script);
