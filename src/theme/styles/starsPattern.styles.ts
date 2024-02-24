import { Styles } from '#types/atoms.types';

type Sx = 'root';

export const starsPatternStyles: Styles<Sx> = {
  root: {
    '& g': {
      ':first-of-type path': {
        fill: ({ palette }) => palette.grey[200]
      },
      ':last-of-type path': {
        fill: ({ palette }) => palette.grey[400]
      },
      path: {
        fill: ({ palette }) => palette.grey[300]
      }
    }
  }
};
