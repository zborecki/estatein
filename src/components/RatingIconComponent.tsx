import { Box } from '@mui/material';
import { FC } from 'react';

import { RatingIcon } from '#assets/icons/RatingIcon';
import { ratingIconStyles } from '#theme/styles/ratingIcon.styles';
import { RatingIconComponentProps } from '#types/props/ratingIcon.types';

export const RatingIconComponent: FC<RatingIconComponentProps> = ({
  variant = 'filled'
}) => (
  <Box sx={ratingIconStyles.root}>
    <RatingIcon
      sx={{
        fontSize: '1.25rem',
        '& path': {
          fill: ({ palette: { grey, warning } }) => (
            variant === 'filled'
              ? warning.main
              : grey[400]
          )
        }
      }}
    />
  </Box>
);
