import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'logomark';

export const logoStyles: Styles<Sx> = {
  logomark: {
    fontSize: '34px',
    '& path': {
      fill: ({ palette: { primary } }) => primary.main
    },
    [defineBreakpoint('lg')]: {
      fontSize: '28px'
    }
  }
};
