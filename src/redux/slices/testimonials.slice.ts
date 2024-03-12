import { createSlice } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { FETCH_TESTIMONIALS_THUNK } from '#redux/thunks/testimonials.thunk';
import { SetOffsetAction, SetSkipAction, SetStatusAction } from '#types/redux/common.actions';
import { TestimonialsState } from '#types/redux/slices/testimonials.types';

const initialState: TestimonialsState = {
  aggregate: {
    count: 0
  },
  data: [],
  message: '',
  offset: 3,
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
    pageSize: 1
  },
  skip: 0,
  status: 'idle'
};

const testimonialsSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(FETCH_TESTIMONIALS_THUNK.fulfilled, (state, { payload }) => ({
      ...state,
      ...payload,
      status: 'success'
    }));
    addCase(FETCH_TESTIMONIALS_THUNK.pending, (state) => ({
      ...state,
      status: 'loading'
    }));
    addCase(FETCH_TESTIMONIALS_THUNK.rejected, (state) => ({
      ...state,
      status: 'error'
    }));
  },
  initialState,
  name: SLICE.TESTIMONIALS,
  reducers: {
    SET_TESTIMONIALS_OFFSET: (state, { payload }: SetOffsetAction) => ({
      ...state,
      offset: payload.offset
    }),
    SET_TESTIMONIALS_SKIP: (state, { payload }: SetSkipAction) => ({
      ...state,
      skip: payload.skip
    }),
    SET_TESTIMONIALS_STATUS: (state, { payload }: SetStatusAction) => ({
      ...state,
      message: payload.message,
      status: payload.status
    })
  }
});

export const {
  actions: {
    SET_TESTIMONIALS_OFFSET,
    SET_TESTIMONIALS_SKIP,
    SET_TESTIMONIALS_STATUS
  },
  reducer: TESTIMONIALS_REDUCER
} = testimonialsSlice;
