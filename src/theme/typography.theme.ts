import { FONT_WEIGHT } from '#constants/typography.constants';
import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Typography } from '#types/atoms.types';

export const typography: Typography = {
  caption: {
    fontSize: '0.875rem',
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: '150%',
    [defineBreakpoint('lg')]: {
      fontSize: '0.75rem'
    }
  },
  fontFamily: ['Urbanist', 'sans-serif'].join(','),
  logotype: {
    fontSize: '1.375rem',
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: '150%',
    [defineBreakpoint('lg')]: {
      fontSize: '1.063rem'
    }
  },
  h4: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: '3.625rem',
    [defineBreakpoint('md')]: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2.625rem'
    },
    [defineBreakpoint('sm')]: {
      fontSize: '1.625rem',
      fontWeight: 700,
      lineHeight: '2.375rem'
    }
  }
};
