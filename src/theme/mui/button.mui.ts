import { Components, alpha } from '@mui/material';

import { colors } from '#constants/colors.constants';
import { typography } from '#theme/typography.theme';

export const muiButton: Components['MuiButton'] = {
  defaultProps: {
    size: 'medium',
    variant: 'contained'
  },
  styleOverrides: {
    contained: {
      backgroundColor: colors.purple[60],
      color: colors.absolute.white,
      ':hover': {
        backgroundColor: colors.purple[65]
      }
    },
    outlined: {
      borderColor: colors.grey[15],
      backgroundColor: colors.grey[8],
      color: colors.absolute.white,
      ':hover': {
        borderColor: colors.purple[60],
        backgroundColor: alpha(colors.purple[60], 0.04)
      }
    },
    outlinedSizeMedium: {
      padding: '13px 20px'
    },
    outlinedSizeSmall: {
      padding: '11px 20px'
    },
    sizeMedium: {
      ...typography.caption,
      padding: '14px 20px'
    },
    sizeSmall: {
      padding: '12px 20px'
    },
    root: {
      borderRadius: 8,
      textTransform: 'capitalize'
    }
  }
};
