import { FONT_WEIGHT } from '#constants/typography.constants';
import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Typography } from '#types/atoms.types';

export const typography: Typography = {
  body1: {
    fontSize: '1rem',
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: '150%',
    [defineBreakpoint('lg')]: {
      fontSize: '0.875rem'
    }
  },
  caption: {
    fontSize: '0.875rem',
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: '150%',
    [defineBreakpoint('lg')]: {
      fontSize: '0.75rem'
    }
  },
  curvedText: {
    fontSize: '0.75rem',
    fontWeight: FONT_WEIGHT.SEMIBOLD
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
  h1: {
    fontSize: '2.875rem',
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: '120%',
    [defineBreakpoint('xl')]: {
      fontSize: '2.5rem'
    },
    [defineBreakpoint('xl')]: {
      fontSize: '1.75rem'
    }
  },
  h4: {
    fontSize: '2.5rem',
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: '3.625rem',
    [defineBreakpoint('md')]: {
      fontSize: '2rem',
      fontWeight: FONT_WEIGHT.BOLD,
      lineHeight: '2.625rem'
    },
    [defineBreakpoint('sm')]: {
      fontSize: '1.625rem',
      fontWeight: FONT_WEIGHT.BOLD,
      lineHeight: '2.375rem'
    }
  },
  h5: {
    fontSize: '1.875rem',
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: '150%',
    [defineBreakpoint('xl')]: {
      fontSize: '1.5rem'
    }
  },
  section: {
    fontSize: '2.375rem',
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: '150%'
  },
  subtitle2: {
    fontSize: '1rem',
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    letterSpacing: 'inherit',
    lineHeight: '150%',
    [defineBreakpoint('lg')]: {
      fontSize: '0.875rem'
    }
  }
};
