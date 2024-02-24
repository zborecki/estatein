import { Components, Theme } from '@mui/material';

import { muiButton } from '#theme/mui/button.mui';
import { muiChip } from '#theme/mui/chip.mui';
import { muiContainer } from '#theme/mui/container.mui';
import { muiDivider } from '#theme/mui/divider';
import { muiPaper } from '#theme/mui/paper.mui';
import { muiSkeleton } from '#theme/mui/skeleton.mui';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: muiButton,
  MuiChip: muiChip,
  MuiContainer: muiContainer,
  MuiDivider: muiDivider,
  MuiPaper: muiPaper,
  MuiSkeleton: muiSkeleton
};
