import { Box, Container } from '@mui/material';

import { LogoComponent } from '#components/LogoComponent';
import { HeaderNavigationModule } from '#components/modules/HeaderNavigationModule';
import { HeaderQuickAccessModule } from '#components/modules/HeaderQuickAccessModule';
import { headerStyles } from '#theme/styles/header.styles';

export const HeaderComponent = () => (
  <Box component="header" sx={headerStyles.root}>
    <Container maxWidth="xl+" sx={headerStyles.container}>
      <LogoComponent />
      <HeaderNavigationModule />
      <HeaderQuickAccessModule />
    </Container>
  </Box>
);
