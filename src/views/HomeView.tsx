import { Box } from '@mui/material';
import { FC } from 'react';

import { HeroSection } from '#components/section/HeroSection';
import { ItsSimpleSection } from '#components/section/ItsSimpleSection';

export const HomeView: FC = () => (
  <Box component="main">
    <HeroSection />
    <ItsSimpleSection />
  </Box>
);
