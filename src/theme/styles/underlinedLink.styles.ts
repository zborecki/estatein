import { alpha } from '@mui/material';

import { Styles } from '#types/atoms.types';

type Sx = 'root';

export const underlinedLinkStyles: Styles<Sx> = {
  root: {
    color: ({ palette: { common } }) => common.white,
    textDecorationColor: ({ palette: { common } }) => alpha(common.white, 0.5),
    textTransform: 'capitalize',
    ':hover': {
      transition: 'text-decoration-color .15s ease-out'
    }
  }
};
