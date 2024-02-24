import { Box } from '@mui/material';

import { ControlledInputComponent } from '#components/ControlledInputComponent';
import { useNewsletterForm } from '#hooks/useNewsletterForm';

export const NewsletterFormComponent = () => {
  const { control, onSubmit } = useNewsletterForm();

  return (
    <Box component="form" onSubmit={onSubmit}>
      <ControlledInputComponent control={control} name="email" />
    </Box>
  );
};
