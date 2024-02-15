import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'button' | 'closeButton' | 'drawer' | 'label';

export const mobileMenuStyles: Styles<Sx> = {
  button: {
    ':hover': {
      '& .MuiTypography-root': {
        color: 'primary.main'
      }
    }
  },
  closeButton: {
    alignSelf: 'flex-start',
    my: 1
  },
  drawer: {
    width: '75%',
    [defineBreakpoint('sm')]: {
      width: '100%'
    }
  },
  label: {
    '& .MuiTypography-root': {
      textTransform: 'uppercase',
      transition: 'color .25s ease-out'
    }
  }
};
