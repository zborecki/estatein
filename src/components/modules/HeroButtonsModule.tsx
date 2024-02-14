import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ButtonLinksComponent } from '#components/ButtonLinksComponent';
import { heroSectionStyles } from '#theme/styles/heroSection.styles';

export const HeroButtonsModule = () => {
  const { t } = useTranslation('');

  return (
    <Stack
      direction="row"
      gap={2}
      sx={heroSectionStyles.buttons}
    >
      <ButtonLinksComponent
        buttons={[
          {
            children: t('label.learn_more'),
            to: '/',
            variant: 'outlined'
          },
          {
            children: t('label.browse_properties'),
            to: '/',
            variant: 'contained'
          }
        ]}
      />
    </Stack>
  );
};
