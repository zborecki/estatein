import { createSlice } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { FETCH_PROPERTIES_THUNK } from '#redux/thunks/properties.thunk';
import { PropertiesSetOffsetAction, PropertiesSetSkipAction } from '#types/redux/actions/properties.action';
import { SetStatusAction } from '#types/redux/common.actions';
import { PropertiesState } from '#types/redux/slices/properties.types';

const initialState: PropertiesState = {
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

const propertiesSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(FETCH_PROPERTIES_THUNK.fulfilled, (state, { payload }) => ({
      ...state,
      ...payload,
      status: 'success'
    }));
    addCase(FETCH_PROPERTIES_THUNK.pending, (state) => ({
      ...state,
      status: 'loading'
    }));
    addCase(FETCH_PROPERTIES_THUNK.rejected, (state) => ({
      ...state,
      status: 'error'
    }));
  },
  initialState,
  name: SLICE.PROPERTIES,
  reducers: {
    SET_PROPERTIES_OFFSET: (state, { payload }: PropertiesSetOffsetAction) => ({
      ...state,
      offset: payload.offset
    }),
    SET_PROPERTIES_SKIP: (state, { payload }: PropertiesSetSkipAction) => ({
      ...state,
      skip: payload.skip
    }),
    SET_PROPERTIES_STATUS: (state, { payload }: SetStatusAction) => ({
      ...state,
      message: payload.message,
      status: payload.status
    })
  }
});

export const {
  actions: {
    SET_PROPERTIES_OFFSET,
    SET_PROPERTIES_SKIP,
    SET_PROPERTIES_STATUS
  },
  reducer: PROPERTIES_REDUCER
} = propertiesSlice;
