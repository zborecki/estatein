import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'root';

export const summaryCardsStyles: Styles<Sx> = {
  root: {
    display: 'grid',
    gap: 2,
    gridTemplateColumns: 'repeat(3,1fr)',
    [defineBreakpoint('sm')]: {
      gap: 1.5,
      gridTemplateColumns: 'repeat(2,1fr)',
      textAlign: 'center',
      '& .MuiPaper-outlined:last-of-type': {
        gridColumn: '1 / -1'
      }
    }
  }
};
