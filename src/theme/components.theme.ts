import { Components, Theme } from '@mui/material';

import { muiButton } from '#theme/mui/button.mui';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: muiButton
};
