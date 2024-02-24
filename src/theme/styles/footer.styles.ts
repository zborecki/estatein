import { Styles } from '#types/atoms.types';

type Sx = 'logo' | 'root';

export const footerStyles: Styles<Sx> = {
  logo: {
    mb: 3
  },
  root: {
    py: 10
  }
};
