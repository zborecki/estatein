import { PaletteOptions } from '@mui/material';

const colors = {
  absolute: {
    black: '#000000',
    white: '#FFFFFF'
  },
  grey: {
    8: '#141414',
    10: '#1A1A1A',
    15: '#262626',
    20: '#333333',
    30: '#4D4D4D',
    40: '#666666',
    50: '#808080',
    60: '#999999'
  }
};

export const palette: PaletteOptions = {
  background: {
    default: colors.grey[8],
    paper: colors.grey[10]
  },
  grey: {
    50: colors.grey[60],
    100: colors.grey[50],
    200: colors.grey[40],
    300: colors.grey[30],
    400: colors.grey[20],
    500: colors.grey[15],
    600: colors.grey[10],
    700: colors.grey[8]
  },
  text: {
    primary: colors.absolute.white,
    secondary: colors.grey[60]
  }
};
