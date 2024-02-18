import { createSlice } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { FETCH_NOTIFICATIONS_MOCKUP, FETCH_NOTIFICATIONS_THUNK } from '#redux/thunks/notifications.thunk';
import { SetStatusAction } from '#types/redux/common.actions';
import { NotificationsState } from '#types/redux/slices/notifications.types';

const initialState: NotificationsState = {
  data: [],
  message: '',
  status: 'idle'
};

const notificationsSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(FETCH_NOTIFICATIONS_MOCKUP.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload.data,
      status: 'success'
    }));
    addCase(FETCH_NOTIFICATIONS_MOCKUP.pending, (state) => ({
      ...state,
      status: 'loading'
    }));
    addCase(FETCH_NOTIFICATIONS_MOCKUP.rejected, (state) => ({
      ...state,
      status: 'error'
    }));
    addCase(FETCH_NOTIFICATIONS_THUNK.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload.data,
      status: 'success'
    }));
    addCase(FETCH_NOTIFICATIONS_THUNK.pending, (state) => ({
      ...state,
      status: 'loading'
    }));
    addCase(FETCH_NOTIFICATIONS_THUNK.rejected, (state) => ({
      ...state,
      status: 'error'
    }));
  },
  initialState,
  name: SLICE.NOTIFICATIONS,
  reducers: {
    SET_NOTIFICATIONS_STATUS: (state, { payload }: SetStatusAction) => ({
      ...state,
      message: payload.message,
      status: payload.status
    })
  }
});

export const {
  actions: {
    SET_NOTIFICATIONS_STATUS
  },
  reducer: NOTIFICATIONS_REDUCER
} = notificationsSlice;
