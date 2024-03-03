import { Box, Container } from '@mui/material';
import { useEffect } from 'react';

import { FooterAnchorsModule } from '#components/modules/FooterAnchorsModule';
import { FooterBottomModule } from '#components/modules/FooterBottomModule';
import { FooterPanelModule } from '#components/modules/FooterPanelModule';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { FETCH_SOCIAL_THUNK } from '#redux/thunks/socials.thunk';
import { footerStyles } from '#theme/styles/footer.styles';

export const FooterComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FETCH_SOCIAL_THUNK());
  }, []);

  return (
    <Box component="footer">
      <Container sx={footerStyles.top}>
        <FooterPanelModule />
        <FooterAnchorsModule />
      </Container>
      <FooterBottomModule />
    </Box>
  );
};
