import { Box } from '@mui/material';

import { PropertyCardComponent } from '#components/PropertyCardComponent';
import { useAppSelector } from '#hooks/useAppSelector';
import { featuredPropertiesListStyles } from '#theme/styles/featuredPropertiesList.styles';
import { generateKey } from '#utils/generateKey';

export const FeaturedPropertiesListComponent = () => {
  const { data } = useAppSelector().properties;

  return data.length > 0 ? (
    <Box sx={featuredPropertiesListStyles.root}>
      {
        data.map(({
          currency, description, images, location, price, slug, title
        }) => (
          <PropertyCardComponent
            acronym={currency}
            description={description}
            image={images[0].url}
            key={generateKey()}
            location={String(location.latitude)}
            price={price}
            slug={slug}
            title={title}
          />
        ))
      }
    </Box>
  ) : undefined;
};
