import { Styles } from '#types/atoms.types';

type Sx = 'icon' | 'root';

export const socialStyles: Styles<Sx> = {
  icon: {
    fontSize: '1.25rem',
    path: {
      fill: ({ palette: { common } }) => common.white
    }
  },
  root: {
    backgroundColor: ({ palette: { grey } }) => grey[700],
    padding: 10 / 8
  }
};
