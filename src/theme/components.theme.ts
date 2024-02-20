import { Components, Theme } from '@mui/material';

import { muiButton } from '#theme/mui/button.mui';
import { muiContainer } from '#theme/mui/container.mui';
import { muiDivider } from '#theme/mui/divider';
import { muiPaper } from '#theme/mui/paper.mui';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: muiButton,
  MuiContainer: muiContainer,
  MuiDivider: muiDivider,
  MuiPaper: muiPaper
};
