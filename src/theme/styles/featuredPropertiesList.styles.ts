import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'root';

export const featuredPropertiesListStyles: Styles<Sx> = {
  root: {
    display: 'grid',
    gap: 20 / 8,
    gridTemplateColumns: 'repeat(3,1fr)',
    [defineBreakpoint(1300)]: {
      gridTemplateColumns: 'repeat(2,1fr)',
      '& .MuiPaper-root:first-of-type': {
        gridColumn: 'span 2'
      }
    },
    [defineBreakpoint('lg')]: {
      gridTemplateColumns: 'none',
      '& .MuiPaper-root:first-of-type': {
        gridColumn: 'inherit'
      }
    }
  }
};
