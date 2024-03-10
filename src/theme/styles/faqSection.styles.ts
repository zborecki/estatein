import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'wrapper';

export const faqSectionStyles: Styles<Sx> = {
  wrapper: {
    display: 'grid',
    gap: 20 / 8,
    gridTemplateColumns: 'repeat(3, 1fr)',
    [defineBreakpoint('lg')]: {
      gridTemplateColumns: 'repeat(2,1fr)',
      '& .MuiPaper-root:last-of-type': {
        gridColumn: 'span 2'
      }
    },
    [defineBreakpoint('md')]: {
      gridTemplateColumns: 'none',
      '& .MuiPaper-root:last-of-type': {
        gridColumn: 'inherit'
      }
    }
  }
};
