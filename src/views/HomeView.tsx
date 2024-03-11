import { Box } from '@mui/material';
import { FC } from 'react';

import { ExplorePropertiesAdSection } from '#components/section/ExplorePropertiesAdSection';
import { FAQSection } from '#components/section/FAQSection';
import { FeaturedPropertiesSection } from '#components/section/FeaturedPropertiesSection';
import { HeroSection } from '#components/section/HeroSection';
import { ItsSimpleSection } from '#components/section/ItsSimpleSection';
import { TestimonialsSection } from '#components/section/TestimonialsSection';

export const HomeView: FC = () => (
  <Box component="main">
    <HeroSection />
    <ItsSimpleSection />
    <FeaturedPropertiesSection />
    <TestimonialsSection />
    <FAQSection />
    <ExplorePropertiesAdSection />
  </Box>
);
