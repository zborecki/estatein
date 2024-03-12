import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '#i18n/settings.i18n';
import { SLICE } from '#redux/keys.redux';
import { SET_TESTIMONIALS_STATUS } from '#redux/slices/testimonials.slice';
import { getTestimonialsPagination } from '#services/testimonials.service';
import { RootState } from '#types/redux/common.types';
import { convertTestimonials } from '#utils/api/convertTestimonials';

export const FETCH_TESTIMONIALS_THUNK = createAsyncThunk(
  `${SLICE.TESTIMONIALS}/FETCH_TESTIMONIALS`,
  async (_, { dispatch, getState }) => {
    const { testimonials } = getState() as RootState;

    try {
      const { data } = await getTestimonialsPagination({
        offset: testimonials.offset,
        skip: testimonials.skip
      });

      return convertTestimonials(data.testimonialsConnection);
    } catch {
      dispatch(SET_TESTIMONIALS_STATUS({
        message: i18n.t('error.common'),
        status: 'error'
      }));

      return {
        aggregate: testimonials.aggregate,
        data: testimonials.data,
        pageInfo: testimonials.pageInfo
      };
    }
  }
);
