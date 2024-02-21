import { Container } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { FeaturedPropertiesListComponent } from '#components/FeaturedPropertiesListComponent';
import { PaginationComponent } from '#components/PaginationComponent';
import { SectionHeaderComponent } from '#components/SectionHeaderComponent';
import { SectionStyled } from '#components/styled/SectionStyled';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';
import { FETCH_MORE_PROPERTIES_THUNK, FETCH_PROPERTIES_THUNK } from '#redux/thunks/properties.thunk';
import { featuredPropertiesSectionStyles } from '#theme/styles/featuredPropertiesSection.styles';

export const FeaturedPropertiesSection = () => {
  const { t } = useTranslation('');
  const dispatch = useAppDispatch();
  const { status } = useAppSelector().properties;

  useEffect(() => {
    dispatch(FETCH_PROPERTIES_THUNK());
  }, []);

  const fetchMoreProperties = useCallback(() => {
    dispatch(FETCH_MORE_PROPERTIES_THUNK());
  }, []);

  return (
    <SectionStyled sx={featuredPropertiesSectionStyles.root}>
      <Container>
        <SectionHeaderComponent
          description={t('featured_properties_section.description')}
          title={t('featured_properties_section.title')}
        />
        {
          status === 'success' && <FeaturedPropertiesListComponent />
        }
        <PaginationComponent
          page={{
            current: 1,
            total: 10
          }}
          onNextPage={fetchMoreProperties}
          onPreviousPage={() => {}}
        />
      </Container>
    </SectionStyled>
  );
};
