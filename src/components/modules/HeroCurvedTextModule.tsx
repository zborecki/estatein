import { Box, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { LinkIcon } from '#assets/icons/LinkIcon';
import { CurvedTextComponent } from '#components/CurvedTextComponent';
import { heroSectionStyles } from '#theme/styles/heroSection.styles';

export const HeroCurvedTextModule = () => {
  const { palette: { grey } } = useTheme();
  const { t } = useTranslation('');

  return (
    <Box sx={{ ...heroSectionStyles.curvedButtonRoot, border: `1px solid ${grey[500]}` }}>
      <Box sx={heroSectionStyles.curvedButtonDummyPlug}>
        <LinkIcon sx={{ display: 'block' }} />
      </Box>
      <Box sx={heroSectionStyles.curvedButtonController}>
        <CurvedTextComponent>
          { t('hero_section.curved_text') }
        </CurvedTextComponent>
      </Box>
    </Box>
  );
};
