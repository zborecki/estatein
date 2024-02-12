import { Stack } from '@mui/material';
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { ButtonLinkComponent } from '#components/ButtonLinkComponent';
import { navigation } from '#constants/navigation.constants';
import { headerStyles } from '#theme/styles/header.styles';
import { generateKey } from '#utils/generateKey';

export const HeaderNavigationModule = () => {
  const { pathname } = useLocation();

  const activeViewColor = useCallback((to: string) => (
    pathname !== to ? 'transparent' : undefined
  ), [pathname]);

  return (
    <Stack
      flexDirection="row" gap={1}
      sx={headerStyles.navigation}
    >
      {
        navigation.map(({ label, to }) => (
          <ButtonLinkComponent
            key={generateKey()}
            size="small"
            sx={{
              backgroundColor: activeViewColor(to),
              borderColor: activeViewColor(to)
            }}
            to={to}
            variant="outlined"
          >
            { label }
          </ButtonLinkComponent>
        ))
      }
    </Stack>
  );
};
