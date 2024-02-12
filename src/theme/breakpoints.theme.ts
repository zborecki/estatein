import { Breakpoint, BreakpointsOptions } from '@mui/material';

import { BOOTSTRAP_BREAKPOINT, CONTAINER } from '#/constants/breakpoints.constants';

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: BOOTSTRAP_BREAKPOINT.SM,
    md: BOOTSTRAP_BREAKPOINT.MD,
    lg: BOOTSTRAP_BREAKPOINT.LG,
    xl: BOOTSTRAP_BREAKPOINT.XL,
    'xl+': CONTAINER.PRIMARY,
    xxl: BOOTSTRAP_BREAKPOINT.XXL
  }
};

export const defineBreakpoint = (breakpoint: Breakpoint) => {
  if (breakpoints.values) {
    return `@media screen and (max-width: ${breakpoints.values[breakpoint]}px)`;
  }
  // eslint-disable-next-line no-console
  console.error(`
    The breakpoint is invalid or does not exist. 
    Check the settings in the "breakpoints.theme.ts" file.
  `);

  return `@media screen and (max-width: ${BOOTSTRAP_BREAKPOINT.XL}px)`;
};
