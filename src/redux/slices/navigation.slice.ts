import { createSlice } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { FETCH_NAVIGATION_THUNK } from '#redux/thunks/navigation.thunk';
import { SetStatusAction } from '#types/redux/common.actions';
import { NavigationState } from '#types/redux/slices/navigation.types';

const initialState: NavigationState = {
  data: {
    footer: []
  },
  message: '',
  status: 'idle'
};

const navigationSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(FETCH_NAVIGATION_THUNK.fulfilled, (state) => ({
      ...state
    }));
    addCase(FETCH_NAVIGATION_THUNK.pending, (state) => ({
      ...state,
      status: 'loading'
    }));
    addCase(FETCH_NAVIGATION_THUNK.rejected, (state) => ({
      ...state,
      status: 'error'
    }));
  },
  initialState,
  name: SLICE.NAVIGATION,
  reducers: {
    SET_NAVIGATION_STATUS: (state, { payload }: SetStatusAction) => ({
      ...state,
      message: payload.message,
      status: payload.status
    })
  }
});

export const {
  actions: {
    SET_NAVIGATION_STATUS
  },
  reducer: NAVIGATION_REDUCER
} = navigationSlice;
