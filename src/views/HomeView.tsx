import { Box } from '@mui/material';
import { FC } from 'react';

import { FeaturedPropertiesSection } from '#components/section/FeaturedPropertiesSection';
import { HeroSection } from '#components/section/HeroSection';
import { ItsSimpleSection } from '#components/section/ItsSimpleSection';

export const HomeView: FC = () => (
  <Box component="main">
    <HeroSection />
    <ItsSimpleSection />
    <FeaturedPropertiesSection />
  </Box>
);
