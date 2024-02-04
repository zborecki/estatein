import { BreakpointsOptions } from '@mui/material';

import { BOOTSTRAP_BREAKPOINT } from '#/constants/breakpoints.constants';

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: BOOTSTRAP_BREAKPOINT.SM,
    md: BOOTSTRAP_BREAKPOINT.MD,
    lg: BOOTSTRAP_BREAKPOINT.LG,
    xl: BOOTSTRAP_BREAKPOINT.XL,
    xxl: BOOTSTRAP_BREAKPOINT.XXL
  }
};
