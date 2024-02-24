import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { sectionHeaderStyles } from '#theme/styles/sectionHeader.styles';
import { SectionHeaderContentModuleProps } from '#types/props/sectionHeader.types';

export const SectionHeaderContentModule: FC<SectionHeaderContentModuleProps> = ({
  children, description, title
}) => (
  <Box sx={children ? sectionHeaderStyles.wrapper : undefined}>
    <Box>
      <Typography
        component="h2"
        sx={sectionHeaderStyles.title}
        variant="section"
      >
        { title }
      </Typography>
      <Typography sx={sectionHeaderStyles.description}>
        { description }
      </Typography>
    </Box>
    { children }
  </Box>
);
