import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

import { LogomarkIcon } from '#assets/icons/LogomarkIcon';
import { logoStyles } from '#theme/styles/logo.styles';
import { BaseProps } from '#types/props/common.types';

const COMPANY_NAME = 'Estatein';

export const LogoComponent: FC<BaseProps> = ({ sx }) => (
  <Stack
    alignItems="center"
    flexDirection="row"
    gap={1}
    sx={sx}
  >
    <LogomarkIcon sx={logoStyles.logomark} />
    <Typography variant="logotype">{ COMPANY_NAME }</Typography>
  </Stack>
);
