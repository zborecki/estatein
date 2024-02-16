import { Components, Theme } from '@mui/material';

import { muiButton } from '#theme/mui/button.mui';
import { muiContainer } from '#theme/mui/container.mui';
import { muiPaper } from '#theme/mui/paper.mui';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: muiButton,
  MuiContainer: muiContainer,
  MuiPaper: muiPaper
};
