import { Box, Container } from '@mui/material';

import { HeroPanelModule } from '#components/modules/HeroPanelModule';
import { heroSectionStyles } from '#theme/styles/heroSection.styles';

export const HeroSection = () => (
  <Box component="section" sx={heroSectionStyles.root}>
    <Container
      maxWidth={false}
      sx={heroSectionStyles.container}
      disableGutters
    >
      <HeroPanelModule />
      <div>Image</div>
    </Container>
  </Box>
);
