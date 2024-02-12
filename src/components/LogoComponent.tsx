import { Stack, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';

import { mergeStyles } from '#/utils/mergeStyles';
import { LogomarkIcon } from '#assets/icons/LogomarkIcon';
import { logoStyles } from '#theme/styles/logo.styles';

const COMPANY_NAME = 'Estatein';

export const LogoComponent = () => {
  const { palette } = useTheme();

  const logomarkStyles = useMemo(() => mergeStyles(logoStyles.logomark, {
    '& path': {
      fill: palette.primary.main
    }
  }), []);

  return (
    <Stack
      alignItems="center"
      flexDirection="row"
      gap={1}
    >
      <LogomarkIcon sx={logomarkStyles} />
      <Typography variant="logotype">{ COMPANY_NAME }</Typography>
    </Stack>
  );
};
