import { styled } from '@mui/material';

enum ATTRIBUTE {
  PADDING = 7
}

export const SectionStyled = styled('section')(({ theme: { spacing } }) => ({
  paddingBottom: spacing(ATTRIBUTE.PADDING),
  paddingTop: spacing(ATTRIBUTE.PADDING)
}));
