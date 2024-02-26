import { Box, Skeleton } from '@mui/material';

import { socialSkeletonStyles } from '#theme/styles/socialSkeleton.styles';

export const SocialSkeleton = () => (
  <Box>
    <Skeleton
      height={40}
      sx={socialSkeletonStyles.root}
      variant="rounded"
      width={40}
    />
  </Box>
);
