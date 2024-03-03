import { createSlice } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { FETCH_SOCIAL_THUNK } from '#redux/thunks/socials.thunk';
import { SocialsSetDataAction } from '#types/redux/actions/socials.action';
import { SocialsState } from '#types/redux/slices/socials.types';

const initialState: SocialsState = {
  data: [],
  message: '',
  status: 'idle'
};

const socialsSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(FETCH_SOCIAL_THUNK.fulfilled, (state, { payload }: SocialsSetDataAction) => ({
      ...state,
      data: payload.data,
      status: 'success'
    }));
    addCase(FETCH_SOCIAL_THUNK.pending, (state) => ({
      ...state,
      status: 'loading'
    }));
    addCase(FETCH_SOCIAL_THUNK.rejected, (state) => ({
      ...state,
      status: 'error'
    }));
  },
  initialState,
  name: SLICE.SOCIALS,
  reducers: {
  }
});

export const {
  reducer: SOCIALS_REDUCER
} = socialsSlice;
