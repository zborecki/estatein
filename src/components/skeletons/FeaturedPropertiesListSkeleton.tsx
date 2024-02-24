import { Box } from '@mui/material';

import { PropertyCardSkeleton } from '#components/skeletons/PropertyCardSkeleton';
import { featuredPropertiesListStyles } from '#theme/styles/featuredPropertiesList.styles';
import { generateKey } from '#utils/generateKey';
import { skeletons } from '#utils/skeletons';

export const FeaturedPropertiesListSkeleton = () => (
  <Box sx={featuredPropertiesListStyles.root}>
    {
      skeletons(3).map(() => (
        <PropertyCardSkeleton key={generateKey()} />
      ))
    }
  </Box>
);
