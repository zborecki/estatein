import { Components } from '@mui/material';

import { colors } from '#constants/colors.constants';
import { typography } from '#theme/typography.theme';

export const muiChip: Components['MuiChip'] = {
  defaultProps: {
    variant: 'outlined'
  },
  styleOverrides: {
    labelMedium: {
      ...typography.caption,
      paddingLeft: 12,
      paddingRight: 12
    },
    outlined: {
      backgroundColor: colors.grey[10],
      borderColor: colors.grey[15]
    },
    sizeMedium: {
      height: 33
    }
  }
};
