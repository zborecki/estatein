import { createTheme } from '@mui/material';

import { breakpoints } from '#theme/breakpoints.theme';
import { components } from '#theme/components.theme';
import { palette } from '#theme/palette.theme';
import { typography } from '#theme/typography.theme';

export const theme = createTheme({
  breakpoints,
  components,
  palette,
  typography
});
