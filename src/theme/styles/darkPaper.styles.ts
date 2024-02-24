import { Styles } from '#types/atoms.types';

type Sx = 'root';

export const darkPaperStyles: Styles<Sx> = {
  root: {
    backgroundColor: ({ palette }) => palette.grey[700]
  }
};
