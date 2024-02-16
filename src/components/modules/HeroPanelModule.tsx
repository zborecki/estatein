import { Box } from '@mui/material';

import { SummaryCardsComponent } from '#components/SummaryCardsComponent';
import { HeroButtonsModule } from '#components/modules/HeroButtonsModule';
import { HeroCurvedTextModule } from '#components/modules/HeroCurvedTextModule';
import { HeroIntroductionModule } from '#components/modules/HeroIntroductionModule';
import { heroSectionStyles } from '#theme/styles/heroSection.styles';

export const HeroPanelModule = () => (
  <Box sx={heroSectionStyles.panel}>
    <Box sx={heroSectionStyles.curvedButtonHelper}>
      <HeroCurvedTextModule />
    </Box>
    <HeroIntroductionModule />
    <HeroButtonsModule />
    <SummaryCardsComponent />
  </Box>
);
