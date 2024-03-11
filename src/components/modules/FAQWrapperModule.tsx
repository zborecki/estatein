import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { faqSectionStyles } from '#theme/styles/faqSection.styles';

export const FAQWrapperModule: FC<PropsWithChildren> = ({
  children
}) => (
  <Box sx={faqSectionStyles.wrapper}>
    { children }
  </Box>
);
