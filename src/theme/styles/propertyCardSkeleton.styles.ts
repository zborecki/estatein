import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'action' | 'image' | 'text';

export const propertyCardSkeletonStyles: Styles<Sx> = {
  action: {
    display: 'grid',
    gap: 2,
    gridTemplateColumns: 'auto minmax(0, 238px)',
    [defineBreakpoint('sm')]: {
      gridTemplateColumns: 'none'
    }
  },
  image: {
    mb: 3
  },
  text: {
    mb: 3
  }
};
