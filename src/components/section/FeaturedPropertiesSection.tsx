import { Container } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { PaginationComponent } from '#components/PaginationComponent';
import { SectionHeaderComponent } from '#components/SectionHeaderComponent';
import { SectionStyled } from '#components/styled/SectionStyled';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { FETCH_MORE_PROPERTIES_THUNK, FETCH_PROPERTIES_THUNK } from '#redux/thunks/properties.thunk';
import { featuredPropertiesSectionStyles } from '#theme/styles/featuredPropertiesSection.styles';

export const FeaturedPropertiesSection = () => {
  const { t } = useTranslation('');
  const dispatch = useAppDispatch();

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
        <button
          style={{ display: 'none' }} type="button"
          onClick={fetchMoreProperties}
        >
          12321321321
        </button>
        <PaginationComponent
          page={{
            current: 1,
            total: 10
          }}
          onNextPage={() => {}}
          onPreviousPage={() => {}}
        />
      </Container>
    </SectionStyled>
  );
};
