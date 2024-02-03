import { createSlice } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { FETCH_NOTIFICATIONS_MOCKUP, FETCH_NOTIFICATIONS_THUNK } from '#redux/thunks/notifications.thunk';
import { NotificationsState } from '#types/redux/slices/notifications.types';

const initialState: NotificationsState = {
  data: [],
  status: 'idle'
};

const notificationsSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(FETCH_NOTIFICATIONS_MOCKUP.fulfilled, (_, { payload }) => ({
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
    addCase(FETCH_NOTIFICATIONS_THUNK.fulfilled, (_, { payload }) => ({
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

  }
});

export const {
  reducer: NOTIFICATIONS_REDUCER
} = notificationsSlice;
