import { Styles } from '#types/atoms.types';

type Sx = 'bottom' | 'container' | 'logo' | 'panel' | 'top';

export const footerStyles: Styles<Sx> = {
  bottom: {
    backgroundColor: ({ palette }) => palette.grey[600],
    py: 12 / 8
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    mb: 3
  },
  panel: {
    maxWidth: 326
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    py: 10
  }
};
