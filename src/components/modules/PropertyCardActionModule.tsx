import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonLinkComponent } from '#components/ButtonLinkComponent';
import { useCurrency } from '#hooks/useCurrency';
import { ROUTE } from '#router/paths.router';
import { propertyCardStyles } from '#theme/styles/propertyCard.styles';
import { PropertyCardActionModuleProps } from '#types/props/propertyCard.types';

export const PropertyCardActionModule: FC<PropertyCardActionModuleProps> = ({
  acronym, price, slug
}) => {
  const { t } = useTranslation('');
  const { currency } = useCurrency({ acronym });

  return (
    <Box sx={propertyCardStyles.action}>
      <Box>
        <Typography sx={propertyCardStyles.price} variant="caption">{ t('label.price') }</Typography>
        <Typography variant="h6">{ `${currency}${price}` }</Typography>
      </Box>
      <ButtonLinkComponent to={`${ROUTE.PROPERTY}/${slug}`}>
        { t('label.view_property_details') }
      </ButtonLinkComponent>
    </Box>
  );
};
