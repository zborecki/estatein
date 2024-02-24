import { Box, Skeleton } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ArrowButtonComponent } from '#components/ArrowButtonComponent';
import { PaginationMetaModule } from '#components/modules/PaginationMetaModule';
import { paginationStyles } from '#theme/styles/pagination.styles';
import { PaginationComponentProps } from '#types/props/pagination.types';

export const PaginationComponent: FC<PaginationComponentProps> = ({
  disableNextButton,
  disablePreviousButton,
  isLoading = false,
  onNextPage,
  onPreviousPage,
  page
}) => {
  const { t } = useTranslation('');

  return (
    <Box sx={paginationStyles.root}>
      <ArrowButtonComponent
        ariaLabel={t('label.previous')}
        disabled={disablePreviousButton}
        variant="left"
        onClick={onPreviousPage}
      />
      {
        isLoading ? (
          <Skeleton sx={paginationStyles.skeleton}>
            <PaginationMetaModule page={page} />
          </Skeleton>
        ) : <PaginationMetaModule page={page} />
      }
      <ArrowButtonComponent
        ariaLabel={t('label.next')}
        disabled={disableNextButton}
        onClick={onNextPage}
      />
    </Box>
  );
};
