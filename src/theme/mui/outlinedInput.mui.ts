import { Components } from '@mui/material';

import { colors } from '#constants/colors.constants';

enum ATTRIBUTE {
  PY = 14.5
}

export const muiOutlinedInput: Components['MuiOutlinedInput'] = {
  styleOverrides: {
    input: {
      paddingBottom: ATTRIBUTE.PY,
      paddingTop: ATTRIBUTE.PY,
      '::placeholder': {
        color: colors.grey[60],
        opacity: 1
      }
    },
    notchedOutline: {
      borderColor: colors.grey[15],
      transition: 'border-color .2s ease-out'
    },
    root: {
      color: colors.absolute.white,
      ':hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.grey[30]
        }
      },
      '&.Mui-focused .MuiInputAdornment-positionStart': {
        path: {
          fill: colors.absolute.white
        }
      },
      '& .MuiInputAdornment-positionStart': {
        path: {
          fill: colors.grey[60]
        }
      },
      '& .MuiInputAdornment-root': {
        path: {
          transition: 'fill .2s ease-out'
        }
      }
    }
  }
};
