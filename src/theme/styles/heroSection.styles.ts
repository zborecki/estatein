/* eslint-disable max-lines */

import { defineBreakpoint } from '#theme/breakpoints.theme';
import { CSSStyles, Styles } from '#types/atoms.types';

export const heroSectionCSS: CSSStyles<'lazyImageWrapper'> = {
  lazyImageWrapper: {
    left: '6vw',
    overflow: 'hidden',
    position: 'absolute',
    top: '4%',
    zIndex: 2
  }
};

type Sx = 'blur' | 'buttons' | 'container' | 'curvedButtonController' | 'curvedButtonDummyPlug' | 'curvedButtonHelper' | 'curvedButtonRoot'
| 'description' | 'illustration' | 'introduction' | 'panel' | 'root' | 'shadow' | 'title' | 'wave';

export const heroSectionStyles: Styles<Sx> = {
  blur: {
    backgroundColor: 'primary.main',
    borderRadius: '50%',
    filter: 'blur(100px)',
    height: 400,
    opacity: 0.30,
    position: 'absolute',
    right: '-10%',
    top: '-20%',
    width: 400,
    zIndex: 3
  },
  buttons: {
    mb: 6.25,
    [defineBreakpoint('sm')]: {
      flexDirection: 'column',
      mb: 5
    }
  },
  container: {
    display: 'grid',
    gap: 7.5,
    gridTemplateColumns: 'repeat(2,1fr)',
    [defineBreakpoint('lg')]: {
      gap: 4
    },
    [defineBreakpoint(826)]: {
      gap: 2,
      gridTemplateColumns: '1fr 0.8fr'
    },
    [defineBreakpoint('md')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: 8,
      pt: 5
    },
    [defineBreakpoint('sm')]: {
      gap: 6
    }
  },
  curvedButtonController: {
    animation: 'rotation 10s linear infinite',
    '@keyframes rotation': {
      '0%': {
        transform: 'rotate(360deg)'
      },
      '100%': {
        transform: 'rotate(0deg)'
      }
    }
  },
  curvedButtonDummyPlug: {
    backgroundColor: 'grey.600',
    borderColor: 'grey.500',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    left: '50%',
    maxWidth: 'fit-content',
    p: 2,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  curvedButtonHelper: {
    position: 'absolute',
    right: '-64px',
    top: '10%',
    transform: 'translateX(64px)',
    zIndex: 5,
    [defineBreakpoint('lg')]: {
      right: '-50px',
      top: '14%',
      transform: 'translateX(50px)'
    },
    [defineBreakpoint(768)]: {
      left: 0,
      right: 'inherit',
      top: '-140px',
      transform: 'inherit'
    },
    [defineBreakpoint('sm')]: {
      left: '0vw',
      right: 'inherit',
      top: '-120px'
    }
  },
  curvedButtonRoot: {
    backgroundColor: 'grey.700',
    borderRadius: '50%',
    maxWidth: 'fit-content',
    position: 'relative',
    [defineBreakpoint('xl')]: {
      transform: 'scale(0.8)'
    },
    [defineBreakpoint('sm')]: {
      transform: 'scale(0.7)'
    }
  },
  description: {
    color: 'grey.50'
  },
  illustration: {
    backgroundColor: 'grey.600',
    overflow: 'hidden',
    position: 'relative',
    [defineBreakpoint('md')]: {
      height: '40vh',
      '& .lazy-load-image-loaded': {
        left: '50% !important',
        transform: 'translateX(-50%)'
      }
    },
    [defineBreakpoint(700)]: {
      height: '30vh',
      '& .lazy-load-image-loaded img': {
        maxWidth: '100%'
      }
    },
    [defineBreakpoint('sm')]: {
      height: '302px',
      '& .lazy-load-image-loaded img': {
        maxWidth: '300px'
      }
    }
  },
  introduction: {
    mb: 6.25,
    [defineBreakpoint('sm')]: {
      mb: 5
    }
  },
  panel: {
    position: 'relative',
    pt: 12.25,
    pl: 10,
    [defineBreakpoint('xl')]: {
      pt: 10,
      pl: 7.5
    },
    [defineBreakpoint('lg')]: {
      pt: 8,
      pl: 4
    },
    [defineBreakpoint(826)]: {
      pt: 6,
      pl: 2
    },
    [defineBreakpoint('md')]: {
      pt: 0,
      pl: 0
    }
  },
  root: {
    backgroundColor: 'grey.700'
  },
  shadow: {
    backgroundColor: 'grey.600',
    borderRadius: '50%',
    filter: 'blur(50px)',
    height: '94%',
    left: '-10%',
    opacity: 0.9,
    overflow: 'hidden',
    position: 'absolute',
    top: '60%',
    transform: 'translateY(-50%) rotate(10deg)',
    width: 200,
    zIndex: 2
  },
  title: {
    mb: 2.5
  },
  wave: {
    left: 0,
    opacity: 0.2,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    transform: 'scale(4)'
  }
};
