import { BOOTSTRAP_BREAKPOINT } from '#/constants/breakpoints.constants';
import { Typography } from '#types/atoms.types';

enum FONT_WEIGHT {
  BOLD = 700,
  MEDIUM = 500,
  REGULAR = 400,
  SEMIBOLD = 600
}

export const typography: Typography = {
  caption: {
    fontSize: '0.875rem',
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: '150%',
    [`@media screen and (max-width: ${BOOTSTRAP_BREAKPOINT.LG}px)`]: {
      fontSize: '0.75rem'
    }
  },
  fontFamily: ['Urbanist', 'sans-serif'].join(',')
};
