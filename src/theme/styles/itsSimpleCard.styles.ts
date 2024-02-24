import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'arrow' | 'icon' | 'root' | 'title';

export const itsSimpleCardStyles: Styles<Sx> = {
  arrow: {
    position: 'absolute',
    right: 20,
    top: 20,
    '& path': {
      stroke: ({ palette }) => palette.grey[300],
      transition: 'stroke .25s ease-out'
    }
  },
  icon: {
    fontSize: '3.75rem',
    [defineBreakpoint('lg')]: {
      fontSize: '3.5rem'
    }
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    p: 2.5,
    position: 'relative',
    transition: 'background-color .25s ease-out',
    ':active': {
      backgroundColor: 'grey.500',
      '& .Estatein-link-icon path': {
        stroke: ({ palette }) => palette.purple[700]
      }
    }
  },
  title: {
    mb: 1.25,
    textAlign: 'center',
    [defineBreakpoint('lg')]: {
      mb: 0
    }
  }
};
