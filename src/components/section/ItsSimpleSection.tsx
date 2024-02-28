import { Box, Container } from '@mui/material';

import { ItsSimpleCardComponent } from '#components/ItsSimpleCardComponent';
import { ANCHOR } from '#constants/anchors.constants';
import { itsSimpleCards } from '#mockups/itsSimpleCard.mockup';
import { itsSimpleSectionStyles } from '#theme/styles/itsSimpleSection.styles';
import { generateKey } from '#utils/generateKey';

export const ItsSimpleSection = () => (
  <Box
    component="section"
    id={ANCHOR.FEATURES}
    sx={itsSimpleSectionStyles.root}
  >
    <Container
      maxWidth={false}
      sx={itsSimpleSectionStyles.container}
      disableGutters
    >
      {
        itsSimpleCards.map((props) => (
          <ItsSimpleCardComponent {...props} key={generateKey()} />
        ))
      }
    </Container>
  </Box>
);
