import { IconButton, InputAdornment } from '@mui/material';

import { SendIcon } from '#assets/icons/SendIcon';
import { newsletterFormStyles } from '#theme/styles/newsletterForm.styles';

export const NewsletterFormButtonModule = () => (
  <InputAdornment position="end">
    <IconButton sx={newsletterFormStyles.button} type="submit">
      <SendIcon sx={newsletterFormStyles.sendIcon} />
    </IconButton>
  </InputAdornment>
);
