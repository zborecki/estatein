import { Styles } from '#types/atoms.types';

type Sx = 'description' | 'root' | 'value';

export const summaryCardStyles: Styles<Sx> = {
  description: {
    color: 'grey.50',
    textTransform: 'capitalize'
  },
  root: {
    px: 2.5,
    py: 1.75
  },
  value: {
    mb: 0.25
  }
};
