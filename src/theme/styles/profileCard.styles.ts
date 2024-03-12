import { Styles } from '#types/atoms.types';

type Sx = 'companyName' | 'root';

export const profileCardStyles: Styles<Sx> = {
  companyName: {
    color: ({ palette }) => palette.grey[50]
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    gap: 10 / 8
  }
};
