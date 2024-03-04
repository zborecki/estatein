import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'container' | 'leftPattern' | 'optionalButton' | 'rightPattern' | 'root';

export const adStyles: Styles<Sx> = {
  container: {
    position: 'relative',
    py: 8,
    zIndex: 10,
    [defineBreakpoint('md')]: {
      py: 6
    }
  },
  leftPattern: {
    bottom: 0,
    left: '-10%',
    position: 'absolute',
    transform: 'scaleX(-1)',
    width: '500px',
    '& path': {
      fill: ({ palette }) => palette.grey[600]
    },
    [defineBreakpoint('lg')]: {
      top: 0,
      transform: 'rotate(180deg)',
      width: '460px'
    },
    [defineBreakpoint('md')]: {
      top: '-16%',
      width: '420px'
    }
  },
  optionalButton: {
    alignItems: 'center',
    display: 'grid',
    gap: 6,
    gridTemplateColumns: 'minmax(0,980px) auto',
    '& .MuiButtonBase-root': {
      justifySelf: 'end',
      maxWidth: 'fit-content'
    },
    [defineBreakpoint('lg')]: {
      gridTemplateColumns: 'none'
    },
    [defineBreakpoint('md')]: {
      gap: 4,
      py: 6
    },
    [defineBreakpoint('sm')]: {
      '& .MuiButtonBase-root': {
        justifySelf: 'inherit',
        maxWidth: 'inherit'
      }
    }
  },
  rightPattern: {
    bottom: -50,
    position: 'absolute',
    right: -50,
    width: '600px',
    '& path': {
      fill: ({ palette }) => palette.grey[600]
    },
    [defineBreakpoint('lg')]: {
      width: '548px'
    },
    [defineBreakpoint('md')]: {
      bottom: -30,
      width: '480px'
    }
  },
  root: {
    borderBottomColor: ({ palette }) => palette.grey[500],
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderTopColor: ({ palette }) => palette.grey[500],
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    position: 'relative',
    overflow: 'hidden'
  }
};
