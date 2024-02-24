import { Box, Link as MuiLink, Typography } from '@mui/material';
import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ROUTE } from '#router/paths.router';
import { propertyCardStyles } from '#theme/styles/propertyCard.styles';
import { PropertyCardBodyModuleProps } from '#types/props/propertyCard.types';
import { defineEllipsis } from '#utils/defineEllipsis';
import { mergeStyles } from '#utils/mergeStyles';

export const PropertyCardBodyModule: FC<PropertyCardBodyModuleProps> = ({
  description, slug, title
}) => {
  const route = useMemo(() => `${ROUTE.PROPERTY}/${slug}`, [slug]);

  const memoizedTitleStyles = useMemo(() => mergeStyles(
    propertyCardStyles.title,
    defineEllipsis({ lineClamp: 1 })
  ), []);

  return (
    <Box sx={propertyCardStyles.body}>
      <MuiLink
        component={Link}
        sx={memoizedTitleStyles}
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
