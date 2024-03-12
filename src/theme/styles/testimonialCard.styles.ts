import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';
import { defineEllipsis } from '#utils/defineEllipsis';

type Sx = 'opinion' | 'rating' | 'root' | 'title';

export const testimonialCardStyles: Styles<Sx> = {
  opinion: {
    ...defineEllipsis({ lineClamp: 4 }),
    mb: 30 / 8,
    minHeight: 'calc(4 * 1rem * 1.5)',
    [defineBreakpoint('lg')]: {
      minHeight: 'calc(4 * 0.875rem * 1.5)'
    },
    [defineBreakpoint('md')]: {
      minHeight: 'inherit'
    }
  },
  rating: {
    mb: 30 / 8
  },
  root: {
    p: 5,
    [defineBreakpoint('md')]: {
      p: 30 / 8
    }
  },
  title: {
    ...defineEllipsis({ lineClamp: 1 }),
    mb: 10 / 8
  }
};
