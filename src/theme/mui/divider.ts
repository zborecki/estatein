import { Components } from '@mui/material';

import { colors } from '#constants/colors.constants';

export const muiDivider: Components['MuiDivider'] = {
  styleOverrides: {
    root: {
      borderColor: colors.grey[15]
    }
  }
};
