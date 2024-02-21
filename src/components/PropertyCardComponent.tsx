import { Chip, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { DarkPaperComponent } from '#components/DarkPaperComponent';
import { LazyImageComponent } from '#components/LazyImageComponent';
import { PropertyCardActionModule } from '#components/modules/PropertyCardActionModule';
import { PropertyCardBodyModule } from '#components/modules/PropertyCardBodyModule';
import { ROUTE } from '#router/paths.router';
import { propertyCardStyles } from '#theme/styles/propertyCard.styles';
import { PropertyCardComponentProps } from '#types/props/propertyCard.types';

export const PropertyCardComponent: FC<PropertyCardComponentProps> = ({
  acronym,
  description,
  image,
  location,
  price,
  slug,
  title
}) => {
  const { spacing } = useTheme();

  return (
    <DarkPaperComponent sx={propertyCardStyles.root}>
      <Link to={`${ROUTE.PROPERTY}/${slug}`}>
        <LazyImageComponent
          alt={title}
          src={image}
          sx={propertyCardStyles.image}
          width="100%"
          wrapperProps={{
            style: { marginBottom: spacing(3) }
          }}
        />
      </Link>
      <Chip label={location} sx={propertyCardStyles.location} />
      <PropertyCardBodyModule
        description={description}
        slug={slug}
        title={title}
      />
      <PropertyCardActionModule
        acronym={acronym}
        price={price}
        slug={slug}
      />
    </DarkPaperComponent>
  );
};
