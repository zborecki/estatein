import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { FeaturedPropertiesListComponent } from '#components/FeaturedPropertiesListComponent';
import { PaginationComponent } from '#components/PaginationComponent';
import { SectionHeaderComponent } from '#components/SectionHeaderComponent';
import { FeaturedPropertiesListSkeleton } from '#components/skeletons/FeaturedPropertiesListSkeleton';
import { SectionStyled } from '#components/styled/SectionStyled';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';
import { useFeaturedProperties } from '#hooks/useFeaturedProperties';
import { FETCH_PROPERTIES_THUNK } from '#redux/thunks/properties.thunk';
import { featuredPropertiesSectionStyles } from '#theme/styles/featuredPropertiesSection.styles';

export const FeaturedPropertiesSection = () => {
  const { t } = useTranslation('');
  const dispatch = useAppDispatch();
  const { onNextPage, onPreviousPage } = useFeaturedProperties();
  const {
    aggregate, status, offset, pageInfo, skip
  } = useAppSelector().properties;

  useEffect(() => {
    dispatch(FETCH_PROPERTIES_THUNK());
  }, []);

  return (
    <SectionStyled sx={featuredPropertiesSectionStyles.root}>
      <Container>
        <SectionHeaderComponent
          description={t('featured_properties_section.description')}
          title={t('label.featured_properties')}
        />
        {
          status === 'success'
            ? <FeaturedPropertiesListComponent />
            : <FeaturedPropertiesListSkeleton />
        }
        <PaginationComponent
          disableNextButton={!pageInfo.hasNextPage}
          disablePreviousButton={!pageInfo.hasPreviousPage}
          isLoading={status === 'loading'}
          page={{
            current: (skip / offset) + 1,
            total: Math.ceil(aggregate.count / offset)
          }}
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
        />
      </Container>
    </SectionStyled>
  );
};
