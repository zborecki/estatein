import { Box, Container, Paper } from '@mui/material';

import { HeroButtonsModule } from '#components/modules/HeroButtonsModule';
import { HeroIntroductionModule } from '#components/modules/HeroIntroductionModule';

export const HeroSection = () => (
  <Box component="section">
    <Container>
      <HeroIntroductionModule />
      <HeroButtonsModule />
      <Paper>
        123123
      </Paper>
    </Container>
  </Box>
);
