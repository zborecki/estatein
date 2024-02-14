import { Components } from '@mui/material';

import { colors } from '#constants/colors.constants';

export const muiPaper: Components['MuiPaper'] = {
  defaultProps: {
    variant: 'outlined'
  },
  styleOverrides: {
    outlined: {
      backgroundColor: colors.grey[10],
      borderColor: colors.grey[15],
      borderRadius: 20
    }
  }
};
