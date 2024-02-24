import { Box, Skeleton } from '@mui/material';

import { DarkPaperComponent } from '#components/DarkPaperComponent';
import { LazyImageComponent } from '#components/LazyImageComponent';
import { PUBLIC } from '#constants/public.constants';
import { propertyCardStyles } from '#theme/styles/propertyCard.styles';
import { propertyCardSkeletonStyles } from '#theme/styles/propertyCardSkeleton.styles';

export const PropertyCardSkeleton = () => (
  <DarkPaperComponent sx={propertyCardStyles.root}>
    <Skeleton sx={propertyCardSkeletonStyles.image}>
      <LazyImageComponent
        src={PUBLIC.PROPERTY_CARD_TEMPLATE}
        sx={propertyCardStyles.image}
        width="100%"
      />
    </Skeleton>
    <Skeleton
      height={33}
      sx={propertyCardStyles.location}
      width="40%"
    />
    <Skeleton
      height={30 + 48}
      sx={propertyCardSkeletonStyles.text}
      width="100%"
    />
    <Box sx={propertyCardSkeletonStyles.action}>
      <Skeleton
        height={49}
        width={100}
      />
      <Skeleton height={49} />
    </Box>
  </DarkPaperComponent>
);
