import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { skeletons } from '#/utils/skeletons';
import { FAQBlockComponent } from '#components/FAQBlockComponent';
import { PaginationComponent } from '#components/PaginationComponent';
import { SectionHeaderComponent } from '#components/SectionHeaderComponent';
import { FAQWrapperModule } from '#components/modules/FAQWrapperModule';
import { FAQBlockSkeleton } from '#components/skeletons/FAQBlockSkeleton';
import { SectionStyled } from '#components/styled/SectionStyled';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';
import { useFAQ } from '#hooks/useFAQ';
import { FETCH_FAQ_THUNK } from '#redux/thunks/faq.thunk';
import { generateKey } from '#utils/generateKey';

export const FAQSection = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('');
  const { onNextPage, onPreviousPage } = useFAQ();
  const {
    aggregate, data, offset, pageInfo, skip, status
  } = useAppSelector().faq;

  useEffect(() => {
    dispatch(FETCH_FAQ_THUNK());
  }, []);

  return (
    <SectionStyled>
      <Container>
        <SectionHeaderComponent
          description={t('faq_section.description')}
          title={t('faq_section.title')}
        />
        <FAQWrapperModule>
          {
            status === 'success'
              ? data.map((props) => <FAQBlockComponent {...props} key={generateKey()} />)
              : skeletons(3).map(() => <FAQBlockSkeleton key={generateKey()} />)
          }
        </FAQWrapperModule>
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
