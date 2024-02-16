import { Box, Container } from '@mui/material';
import { useMemo } from 'react';

import { LogoComponent } from '#components/LogoComponent';
import { MobileMenuComponent } from '#components/MobileMenuComponent';
import { HeaderNavigationModule } from '#components/modules/HeaderNavigationModule';
import { HeaderQuickAccessModule } from '#components/modules/HeaderQuickAccessModule';
import { useTabletMediaQuery } from '#hooks/useTabletMediaQuery';
import { headerStyles } from '#theme/styles/header.styles';

export const HeaderComponent = () => {
  const { isTablet } = useTabletMediaQuery();

  const memoizedNavigation = useMemo(() => (
    <>
      <HeaderNavigationModule />
      <HeaderQuickAccessModule />
    </>
  ), []);

  return (
    <Box component="header" sx={headerStyles.root}>
      <Container sx={headerStyles.container}>
        <LogoComponent />
        {
          !isTablet
            ? memoizedNavigation
            : <MobileMenuComponent />
        }
      </Container>
    </Box>
  );
};
