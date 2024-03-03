import { Box, Container } from '@mui/material';

import { FooterCopyrightModule } from '#components/modules/FooterCopyrightModule';
import { FooterSocialsModule } from '#components/modules/FooterSocialsModule';
import { footerStyles } from '#theme/styles/footer.styles';

export const FooterBottomModule = () => (
  <Box sx={footerStyles.bottom}>
    <Container sx={footerStyles.container}>
      <FooterCopyrightModule />
      <FooterSocialsModule />
    </Container>
  </Box>
);
