import { useMediaQuery, useTheme } from '@mui/material';

export const useTabletMediaQuery = () => {
  const { breakpoints } = useTheme();
  const isTablet = useMediaQuery(breakpoints.down('md'));

  return {
    isTablet
  };
};
