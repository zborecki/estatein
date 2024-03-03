import { Box } from '@mui/material';

import { LogoComponent } from '#components/LogoComponent';
import { NewsletterFormComponent } from '#components/NewsletterFormComponent';
import { footerStyles } from '#theme/styles/footer.styles';

export const FooterPanelModule = () => (
  <Box sx={footerStyles.panel}>
    <LogoComponent sx={footerStyles.logo} />
    <NewsletterFormComponent />
  </Box>
);
