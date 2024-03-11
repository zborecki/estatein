import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '#i18n/settings.i18n';
import { SLICE } from '#redux/keys.redux';
import { SET_FAQ_STATUS } from '#redux/slices/faq.slice';
import { getFAQPagination } from '#services/faq.service';
import { RootState } from '#types/redux/common.types';
import { convertQuestions } from '#utils/api/convertQuestions';

export const FETCH_FAQ_THUNK = createAsyncThunk(
  `${SLICE.FAQ}/FETCH_QUESTIONS_AND_ANSWERS`,
  async (_, { dispatch, getState }) => {
    const { faq } = getState() as RootState;

    try {
      const { data } = await getFAQPagination({
        offset: faq.offset,
        skip: faq.skip
      });

      return convertQuestions(data.faqsConnection);
    } catch {
      dispatch(SET_FAQ_STATUS({
        message: i18n.t('error.common'),
        status: 'error'
      }));

      return {
        aggregate: faq.aggregate,
        data: faq.data,
        pageInfo: faq.pageInfo
      };
    }
  }
);
