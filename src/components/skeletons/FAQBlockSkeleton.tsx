import { Paper, Skeleton } from '@mui/material';

import { faqBlockStyles } from '#theme/styles/faqBlock.styles';
import { faqBlockSkeletonStyles } from '#theme/styles/faqBlockSkeleton.styles';

export const FAQBlockSkeleton = () => (
  <Paper sx={faqBlockStyles.root}>
    <Skeleton
      height={60}
      variant="rounded"
    />
    <Skeleton
      height={48}
      variant="rounded"
    />
    <Skeleton
      height={49}
      sx={faqBlockSkeletonStyles.button}
      variant="rounded"
    />
  </Paper>
);
