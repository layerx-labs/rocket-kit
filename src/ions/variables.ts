import { lighten, darken } from 'polished';

export const colors = {
  normal: '#000000',
  light: '#ffffff',
  blue: '#4250e4',
  orange: '#ff6a2c',
  darkOrange: darken(0.2, '#ff6a2c'),
  red: '#ef5766',
  lightRed: lighten(0.25, '#ef5766'),
  darkRed: darken(0.19, '#ef5766'),
  purple: '#4329a6',
  lightPurple: lighten(0.4, '#4329a6'),
  darkPurple: darken(0.15, '#4329a6'),
  green: '#56cad7',
  lightGreen: lighten(0.3, '#56cad7'),
  darkGreen: darken(0.15, '#56cad7'),
  grey: '#939393',
  lightGrey: '#c4c7d3',
  darkGrey: darken(0.1, '#939393'),
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
};
