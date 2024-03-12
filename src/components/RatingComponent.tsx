import { Rating } from '@mui/material';
import { FC } from 'react';

import { RatingIconComponent } from '#components/RatingIconComponent';
import { ratingStyles } from '#theme/styles/rating.styles';
import { RatingComponentProps } from '#types/props/rating.types';
import { mergeStyles } from '#utils/mergeStyles';

export const RatingComponent: FC<RatingComponentProps> = ({
  sx, value
}) => (
  <Rating
    emptyIcon={<RatingIconComponent variant="outlined" />}
    icon={<RatingIconComponent />}
    sx={mergeStyles(ratingStyles.root, sx)}
    value={value}
    readOnly
  />
);
