import { Styles } from '#types/atoms.types';

type Sx = 'rating' | 'root';

export const ratingIconStyles: Styles<Sx> = {
  root: {
    backgroundColor: ({ palette }) => palette.grey[600],
    borderRadius: '50%',
    borderColor: ({ palette }) => palette.grey[500],
    borderStyle: 'solid',
    borderWidth: 1,
    p: 1,
    '& svg': {
      display: 'block'
    }
  }
};
