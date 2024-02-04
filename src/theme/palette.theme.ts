import { PaletteOptions } from '@mui/material';

import { colors } from '#constants/colors.constants';

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
  primary: {
    main: colors.purple[60]
  },
  purple: {
    50: colors.purple[99],
    100: colors.purple[97],
    200: colors.purple[95],
    300: colors.purple[90],
    400: colors.purple[75],
    500: colors.purple[70],
    600: colors.purple[65],
    700: colors.purple[60]
  },
  text: {
    primary: colors.absolute.white,
    secondary: colors.grey[60]
  }
};
