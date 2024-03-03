import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';
import { isIOS } from '#utils/getPlatform';

type Sx = 'bottom' | 'container' | 'logo' | 'panel' | 'top';

export const footerStyles: Styles<Sx> = {
  bottom: {
    backgroundColor: ({ palette }) => palette.grey[600],
    py: 12 / 8,
    pb: isIOS ? 'calc(4px + env(safe-area-inset-bottom))' : undefined
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    [defineBreakpoint('sm')]: {
      flexDirection: 'column-reverse',
      gap: 3
    }
  },
  logo: {
    mb: 3
  },
  panel: {
    maxWidth: 326,
    [defineBreakpoint('md')]: {
      maxWidth: 448
    },
    [defineBreakpoint('sm')]: {
      maxWidth: '100%'
    }
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    py: 10,
    [defineBreakpoint('md')]: {
      flexDirection: 'column',
      gap: 6
    }
  }
};
