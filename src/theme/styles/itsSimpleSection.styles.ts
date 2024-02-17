import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'container' | 'root';

export const itsSimpleSectionStyles: Styles<Sx> = {
  container: {
    backgroundColor: 'grey.700',
    borderColor: 'grey.500',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'grid',
    gap: 1.25,
    gridTemplateColumns: 'repeat(4,1fr)',
    p: 1.25,
    [defineBreakpoint('md')]: {
      gridTemplateColumns: 'repeat(2,1fr)'
    },
    [defineBreakpoint(426)]: {
      gridTemplateColumns: 'none'
    }
  },
  root: {
    backgroundColor: 'grey.600',
    p: 1,
    [defineBreakpoint('md')]: {
      mt: 5
    }
  }
};
