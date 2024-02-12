import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'logomark';

export const logoStyles: Styles<Sx> = {
  logomark: {
    fontSize: '34px',
    [defineBreakpoint('lg')]: {
      fontSize: '28px'
    }
  }
};
