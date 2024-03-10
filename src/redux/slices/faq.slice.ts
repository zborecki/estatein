import { createSlice } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { FETCH_FAQ_THUNK } from '#redux/thunks/faq.thunk';
import { SetOffsetAction, SetSkipAction, SetStatusAction } from '#types/redux/common.actions';
import { FAQState } from '#types/redux/slices/faq.types';

const initialState: FAQState = {
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

const faqSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(FETCH_FAQ_THUNK.fulfilled, (state, { payload }) => ({
      ...state,
      ...payload,
      status: 'success'
    }));
    addCase(FETCH_FAQ_THUNK.pending, (state) => ({
      ...state,
      status: 'loading'
    }));
    addCase(FETCH_FAQ_THUNK.rejected, (state) => ({
      ...state,
      status: 'error'
    }));
  },
  initialState,
  name: SLICE.FAQ,
  reducers: {
    SET_FAQ_OFFSET: (state, { payload }: SetOffsetAction) => ({
      ...state,
      offset: payload.offset
    }),
    SET_FAQ_SKIP: (state, { payload }: SetSkipAction) => ({
      ...state,
      skip: payload.skip
    }),
    SET_FAQ_STATUS: (state, { payload }: SetStatusAction) => ({
      ...state,
      message: payload.message,
      status: payload.status
    })
  }
});

export const {
  actions: {
    SET_FAQ_OFFSET,
    SET_FAQ_SKIP,
    SET_FAQ_STATUS
  },
  reducer: FAQ_REDUCER
} = faqSlice;
