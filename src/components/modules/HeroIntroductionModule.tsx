import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { heroSectionStyles } from '#theme/styles/heroSection.styles';

export const HeroIntroductionModule = () => {
  const { t } = useTranslation('');

  return (
    <Box sx={heroSectionStyles.introduction}>
      <Typography sx={heroSectionStyles.title} variant="h1">
        { t('hero_section.title') }
      </Typography>
      <Typography sx={heroSectionStyles.description}>
        { t('hero_section.description') }
      </Typography>
    </Box>
  );
};
