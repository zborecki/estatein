import { BOOTSTRAP_BREAKPOINT } from '#/constants/breakpoints.constants';
import { FONT_WEIGHT } from '#constants/typography.constants';
import { Typography } from '#types/atoms.types';

export const typography: Typography = {
  caption: {
    fontSize: '0.875rem',
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: '150%',
    [`@media screen and (max-width: ${BOOTSTRAP_BREAKPOINT.LG}px)`]: {
      fontSize: '0.75rem'
    }
  },
  fontFamily: ['Urbanist', 'sans-serif'].join(','),
  logotype: {
    fontSize: '1.375rem',
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: '150%',
    [`@media screen and (max-width: ${BOOTSTRAP_BREAKPOINT.LG}px)`]: {
      fontSize: '1.063rem'
    }
  }
};
