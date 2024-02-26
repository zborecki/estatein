import { Styles } from '#types/atoms.types';

type Sx = 'logo' | 'panel' | 'root';

export const footerStyles: Styles<Sx> = {
  logo: {
    mb: 3
  },
  panel: {
    maxWidth: 326
  },
  root: {
    py: 10
  }
};
