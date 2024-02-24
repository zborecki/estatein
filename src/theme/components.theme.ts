import { Components, Theme } from '@mui/material';

import { muiButton } from '#theme/mui/button.mui';
import { muiChip } from '#theme/mui/chip.mui';
import { muiContainer } from '#theme/mui/container.mui';
import { muiDivider } from '#theme/mui/divider';
import { muiInputAdornment } from '#theme/mui/inputAdornment.mui';
import { muiTextField } from '#theme/mui/muiTextField';
import { muiOutlinedInput } from '#theme/mui/outlinedInput.mui';
import { muiPaper } from '#theme/mui/paper.mui';
import { muiSkeleton } from '#theme/mui/skeleton.mui';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiInputAdornment: muiInputAdornment,
  MuiButton: muiButton,
  MuiChip: muiChip,
  MuiContainer: muiContainer,
  MuiDivider: muiDivider,
  MuiOutlinedInput: muiOutlinedInput,
  MuiPaper: muiPaper,
  MuiSkeleton: muiSkeleton,
  MuiTextField: muiTextField
};
