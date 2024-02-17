import { colors } from '#constants/colors.constants';
import { Styles } from '#types/atoms.types';

type Sx = 'root';

export const starsPatternStyles: Styles<Sx> = {
  root: {
    '& g': {
      ':first-of-type path': {
        fill: colors.grey[40]
      },
      ':last-of-type path': {
        fill: colors.grey[20]
      },
      path: {
        fill: colors.grey[30]
      }
    }
  }
};
