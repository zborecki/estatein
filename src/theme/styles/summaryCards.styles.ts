import { Styles } from '#types/atoms.types';

type Sx = 'root';

export const summaryCardsStyles: Styles<Sx> = {
  root: {
    display: 'grid',
    gap: 2,
    gridTemplateColumns: 'repeat(3,1fr)'
  }
};
