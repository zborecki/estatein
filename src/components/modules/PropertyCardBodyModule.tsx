import { Box, Link as MuiLink, Typography } from '@mui/material';
import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { defineEllipsis } from '#/utils/defineEllipsis';
import { mergeStyles } from '#/utils/mergeStyles';
import { ROUTE } from '#router/paths.router';
import { propertyCardStyles } from '#theme/styles/propertyCard.styles';
import { PropertyCardBodyModuleProps } from '#types/props/propertyCard.types';

export const PropertyCardBodyModule: FC<PropertyCardBodyModuleProps> = ({
  description, slug, title
}) => {
  const route = useMemo(() => `${ROUTE.PROPERTY}/${slug}`, [slug]);

  return (
    <Box sx={propertyCardStyles.body}>
      <MuiLink
        component={Link}
        sx={propertyCardStyles.title}
        to={route}
        variant="h6"
      >
        { title }
      </MuiLink>
      <Box>
        <Typography
          sx={mergeStyles(propertyCardStyles.description, defineEllipsis({ lineClamp: 2 }))}
        >
          { description }
        </Typography>
      </Box>
    </Box>
  );
};
