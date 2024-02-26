import { Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';

import { COMPANY } from '#constants/company.constants';

const currentYear = new Date().getFullYear();

export const FooterCopyrightModule = () => {
  const { t } = useTranslation('');

  return (
    <Typography>
      <Trans
        values={{
          companyName: COMPANY.NAME,
          year: currentYear
        }}
      >
        { t('footer.copyright') }
      </Trans>
    </Typography>
  );
};
