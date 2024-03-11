import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { PaginationComponent } from '#components/PaginationComponent';
import { SectionHeaderComponent } from '#components/SectionHeaderComponent';
import { SectionStyled } from '#components/styled/SectionStyled';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';
import { useTestimonials } from '#hooks/useTestimonials';
import { FETCH_TESTIMONIALS_THUNK } from '#redux/thunks/testimonials.thunk';

export const TestimonialsSection = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('');
  const { onNextPage, onPreviousPage } = useTestimonials();
  const {
    aggregate, offset, pageInfo, skip, status
  } = useAppSelector().testimonials;

  useEffect(() => {
    dispatch(FETCH_TESTIMONIALS_THUNK());
  }, []);

  return (
    <SectionStyled>
      <Container>
        <SectionHeaderComponent
          description={t('testimonials_section.description')}
          title={t('testimonials_section.title')}
        />
        123
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
