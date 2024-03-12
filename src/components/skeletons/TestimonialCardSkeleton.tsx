import { Skeleton } from '@mui/material';

import { DarkPaperComponent } from '#components/DarkPaperComponent';
import { testimonialCardStyles } from '#theme/styles/testimonialCard.styles';

export const TestimonialCardSkeleton = () => (
  <DarkPaperComponent sx={testimonialCardStyles.root}>
    <Skeleton
      height={38}
      sx={{ mb: 30 / 8 }}
      variant="rounded"
      width={222}
    />
    <Skeleton
      height={30}
      sx={{ mb: 10 / 8 }}
      variant="rounded"
    />
    <Skeleton
      height={96}
      sx={{ mb: 30 / 8 }}
      variant="rounded"
    />
    <Skeleton
      height={44}
      variant="rounded"
      width={300}
    />
  </DarkPaperComponent>
);
