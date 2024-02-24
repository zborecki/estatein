import { Box, Container } from '@mui/material';

import { FooterPanelModule } from '#components/modules/FooterPanelModule';
import { footerStyles } from '#theme/styles/footer.styles';

export const FooterComponent = () => (
  <Box component="footer" sx={footerStyles.root}>
    <Container>
      <FooterPanelModule />
    </Container>
  </Box>
);
