import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ControlledTextFieldComponent } from '#components/inputs/ControlledTextFieldComponent';
import { NewsletterFormButtonModule } from '#components/modules/NewsletterFormButtonModule';
import { NewsletterFormIconModule } from '#components/modules/NewsletterFormIconModule';
import { useNewsletterForm } from '#hooks/useNewsletterForm';

export const NewsletterFormComponent = () => {
  const { t } = useTranslation('');
  const { control, onSubmit } = useNewsletterForm();

  return (
    <Box component="form" onSubmit={onSubmit}>
      <ControlledTextFieldComponent
        control={control}
        inputProps={{
          startAdornment: <NewsletterFormIconModule />,
          endAdornment: <NewsletterFormButtonModule />
        }}
        name="email"
        placeholder={t('placeholder.email')}
        fullWidth
      />
    </Box>
  );
};
