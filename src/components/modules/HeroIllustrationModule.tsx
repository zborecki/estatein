import { Box, useTheme } from '@mui/material';

import { HeroShadowComponent } from './HeroShadowComponent';

import { WavesPattern } from '#/assets/patterns/WavesPattern';
import { LazyImageComponent } from '#components/LazyImageComponent';
import { HeroBlurModule } from '#components/modules/HeroBlurModule';
import { heroSectionCSS, heroSectionStyles } from '#theme/styles/heroSection.styles';

export const HeroIllustrationModule = () => {
  const { palette } = useTheme();

  return (
    <Box sx={heroSectionStyles.illustration}>
      <HeroBlurModule />
      <HeroShadowComponent />
      <LazyImageComponent
        src="/images/skyscraper.webp"
        width={460}
        wrapperProps={{
          style: heroSectionCSS.lazyImageWrapper
        }}
      />
      <WavesPattern
        color={palette.grey[200]}
        sx={heroSectionStyles.wave}
      />
    </Box>
  );
};
