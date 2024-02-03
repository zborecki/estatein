import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { notificationBarStyles } from '#theme/styles/notificationBar.styles';

export const NotificationBarLoaderModule = () => {
  const { t } = useTranslation();

  return (
    <Typography
      sx={notificationBarStyles.loading}
      variant="caption"
    >
      { t('label.loading') }
    </Typography>
  );
};
