import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'button';

export const faqBlockSkeletonStyles: Styles<Sx> = {
  button: {
    maxWidth: '110px',
    [defineBreakpoint('sm')]: {
      maxWidth: '100%'
    }
  }
};
