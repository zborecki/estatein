import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ButtonLinkComponent } from '#components/ButtonLinkComponent';

export const HeaderQuickAccessModule = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ButtonLinkComponent size="small" variant="outlined">
        { t('label.contact_us') }
      </ButtonLinkComponent>
    </Box>
  );
};
