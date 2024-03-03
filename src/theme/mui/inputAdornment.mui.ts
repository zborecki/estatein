import { Components } from '@mui/material';

export const muiInputAdornment: Components['MuiInputAdornment'] = {
  styleOverrides: {
    outlined: {
      '& .MuiSvgIcon-root': {
        fontSize: '1.25rem'
      }
    }
  }
};
