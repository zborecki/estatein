import {
  ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme, alpha
} from '@mui/material';

import { colors } from '#constants/colors.constants';
import { FONT_WEIGHT } from '#constants/typography.constants';

interface MUIButton {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants<Theme>['MuiButton'];
}

export const muiButton: MUIButton = {
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
      fontSize: '0.875rem',
      fontWeight: FONT_WEIGHT.MEDIUM,
      lineHeight: '150%',
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
