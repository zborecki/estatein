import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { paginationStyles } from '#theme/styles/pagination.styles';
import { PaginationMetaModuleProps } from '#types/props/pagination.types';
import { leadingZero } from '#utils/leadingZero';

export const PaginationMetaModule: FC<PaginationMetaModuleProps> = ({
  page: { current, total }
}) => {
  const { t } = useTranslation('');

  return (
    <Typography sx={paginationStyles.meta}>
      <Box component="span">{ leadingZero(current) }</Box>
      { ` ${t('label.of')} ${leadingZero(total)}` }
    </Typography>
  );
};
