import { lighten, darken, rem } from 'polished';

export const colors = {
  // NEUTRALS
  black: '#000000',
  white: '#ffffff',

  // GREY
  grey50: '#F1F1F3',
  grey100: '#E3E3E8',
  grey150: '#D5D6DC',
  grey200: '#C7C8D1',
  grey300: '#ABACBA',
  grey400: '#8F91A3',
  grey500: '#73758C',
  grey600: '#5C5E70',
  grey700: '#454654',
  grey800: '#2E2F38',
  grey850: '#23232A',
  grey900: '#17171C',
  grey950: '#0C0C0E',

  // BLUE
  blue50: '#ECEDFC',
  blue100: '#D9DCFA',
  blue150: '#C6CAF7',
  blue200: '#B3B9F4',
  blue300: '#8E96EF',
  blue400: '#6873E9',
  blue500: '#4250E4',
  blue600: '#3540B6',
  blue700: '#283089',
  blue800: '#1A205B',
  blue850: '#141844',
  blue900: '#0D102E',
  blue950: '#070817',

  // PURPLE
  purple50: '#ECEAF6',
  purple100: '#D9D4ED',
  purple150: '#C7BFE4',
  purple200: '#B4A9DB',
  purple300: '#8E7FCA',
  purple400: '#6954B8',
  purple500: '#4329A6',
  purple600: '#362185',
  purple700: '#281964',
  purple800: '#1B1042',
  purple850: '#140C32',
  purple900: '#0D0821',
  purple950: '#070411',

  // RED
  red50: '#FDEEEE',
  red100: '#FBDDDD',
  red150: '#F9CDCD',
  red200: '#F7BCBC',
  red300: '#F39A9A',
  red400: '#EF7979',
  red500: '#EB5757',
  red600: '#BC4646',
  red700: '#8D3434',
  red800: '#5E2323',
  red850: '#471A1A',
  red900: '#2F1111',
  red950: '#180909',

  // ORACLE
  oracle50: '#F4F0FD',
  oracle100: '#EAE1FB',
  oracle150: '#DFD2FA',
  oracle200: '#D5C3F8',
  oracle300: '#C0A5F4',
  oracle400: '#AB87F1',
  oracle500: '#9669ED',
  oracle600: '#7854BE',
  oracle700: '#5A3F8E',
  oracle800: '#3C2A5F',
  oracle850: '#2D2047',
  oracle900: '#1E152F',
  oracle950: '#0F0B18',

  // GREEN
  green50: '#EBFCF7',
  green100: '#D7F9EF',
  green150: '#C2F6E6',
  green200: '#AEF3DE',
  green300: '#86ECCE',
  green400: '#5DE6BD',
  green500: '#35E0AD',
  green600: '#2AB38A',
  green700: '#208668',
  green800: '#155A45',
  green850: '#104334',
  green900: '#0B2D23',
  green950: '#051611',

  // ORANGE
  orange50: '#FFF0EA',
  orange100: '#FFE1D5',
  orange150: '#FFD2C0',
  orange200: '#FFC3AB',
  orange300: '#FFA680',
  orange400: '#FF8856',
  orange500: '#FF6A2C',
  orange600: '#CC5523',
  orange700: '#99401A',
  orange800: '#662A12',
  orange850: '#4D200D',
  orange900: '#331509',
  orange950: '#1A0B04',

  // YELLOW
  yellow50: '#FFFBEC',
  yellow100: '#FFF7DA',
  yellow150: '#FFF3C7',
  yellow200: '#FFEFB5',
  yellow300: '#FFE690',
  yellow400: '#FFDE6B',
  yellow500: '#FFD646',
  yellow600: '#CCAB38',
  yellow700: '#99802A',
  yellow800: '#66561C',
  yellow850: '#4D4015',
  yellow900: '#332B0E',
  yellow950: '#1A1507',

  // PALE BLUE
  paleBlue50: '#F3F9FD',
  paleBlue100: '#E7F4FB',
  paleBlue150: '#DBEEF9',
  paleBlue200: '#CFE9F7',
  paleBlue300: '#B7DDF4',
  paleBlue400: '#9FD2F0',
  paleBlue500: '#87C7EC',
  paleBlue600: '#6C9FBD',
  paleBlue700: '#51778E',
  paleBlue800: '#36505E',
  paleBlue850: '#293C47',
  paleBlue900: '#1B282F',
  paleBlue950: '#0E1418',

  // PALE ORANGE
  paleOrange50: '#FDF4EC',
  paleOrange100: '#FCE9D9',
  paleOrange150: '#FADEC6',
  paleOrange200: '#F8D3B3',
  paleOrange300: '#F5BE8C',
  paleOrange400: '#F1A866',
  paleOrange500: '#EE9240',
  paleOrange600: '#BE7533',
  paleOrange700: '#8F5826',
  paleOrange800: '#5F3A1A',
  paleOrange850: '#472C13',
  paleOrange900: '#301D0D',
  paleOrange950: '#180F06',

  // OLD
  normal: '#000000',
  light: '#ffffff',
  blue: '#4250e4',
  darkBlue: '#1825AD',
  orange: '#ff6a2c',
  darkOrange: darken(0.2, '#ff6a2c'),
  red: '#ef5766',
  lightRed: lighten(0.25, '#ef5766'),
  darkRed: darken(0.19, '#ef5766'),
  lightPurple: lighten(0.4, '#4329a6'),
  darkPurple: darken(0.15, '#4329a6'),
  green: '#56cad7',
  lightGreen: lighten(0.3, '#56cad7'),
  darkGreen: darken(0.15, '#56cad7'),
  grey: '#939393',
  lightGrey: '#c4c7d3',
  darkGrey: darken(0.1, '#939393'),
};

export const colorHues = [50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950];

export const typography = {
  defaultFont: `"Space Grotesk", Verdana, Arial, Helvetica, sans-serif`,
  defaultSize: '16px',
  regular: 400,
  medium: 500,
  bold: 700,
};

export const button = {
  height: rem('44px'),
  borderWidth: rem('1px'),
  borderRadius: rem('8px'),
  padding: rem('24px'),
  iconSpacing: rem('14px'),
  iconSize: rem('20px'),
}

export const misc = {
  transitionDuration: '0.3s'
}
