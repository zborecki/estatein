import { styled } from '@mui/material';

enum ATTRIBUTE {
  PADDING = 45 / 8
}

export const SectionStyled = styled('section')(({ theme: { spacing } }) => ({
  paddingBottom: spacing(ATTRIBUTE.PADDING),
  paddingTop: spacing(ATTRIBUTE.PADDING)
}));
