import { Box } from '@mui/material';
import { FC } from 'react';

import { hamburgerStyles } from '#theme/styles/hamburger.styles';
import { ActionProps } from '#types/props/common.types';

export const HamburgerComponent: FC<ActionProps> = ({
  onClick
}) => (
  <Box
    component="button"
    sx={hamburgerStyles.root}
    onClick={onClick}
  >
    <Box sx={hamburgerStyles.container}>
      <Box sx={hamburgerStyles.ingredient} />
    </Box>
  </Box>
);
