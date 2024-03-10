import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';
import { defineEllipsis } from '#utils/defineEllipsis';

type Sx = 'answer' | 'button' | 'question' | 'root';

export const faqBlockStyles: Styles<Sx> = {
  answer: {
    ...defineEllipsis({ lineClamp: 2 }),
    color: ({ palette }) => palette.grey[50],
    minHeight: 'calc(2 * 1rem * 1.5)',
    [defineBreakpoint('lg')]: {
      minHeight: 'calc(2 * 0.875rem * 1.5)'
    },
    [defineBreakpoint('md')]: {
      minHeight: 'inherit'
    }
  },
  button: {
    alignSelf: 'self-start',
    [defineBreakpoint('sm')]: {
      alignSelf: 'inherit'
    }
  },
  question: {
    ...defineEllipsis({ lineClamp: 2 }),
    minHeight: 'calc(2 * 1.25rem * 1.5)',
    [defineBreakpoint('md')]: {
      minHeight: 'inherit'
    }
  },
  root: {
    backgroundColor: ({ palette }) => palette.grey[700],
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    p: 5,
    [defineBreakpoint('md')]: {
      p: 30 / 8
    }
  }
};
