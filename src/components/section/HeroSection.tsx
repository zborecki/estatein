import { Box, Container } from '@mui/material';

import { HeroIllustrationModule } from '#components/modules/HeroIllustrationModule';
import { HeroPanelModule } from '#components/modules/HeroPanelModule';
import { useTabletMediaQuery } from '#hooks/useTabletMediaQuery';
import { heroSectionStyles } from '#theme/styles/heroSection.styles';

export const HeroSection = () => {
  const { isTablet } = useTabletMediaQuery();

  return (
    <Box component="section" sx={heroSectionStyles.root}>
      <Container
        disableGutters={!isTablet}
        maxWidth={false}
        sx={heroSectionStyles.container}
      >
        <HeroPanelModule />
        <HeroIllustrationModule />
      </Container>
    </Box>
  );
};
