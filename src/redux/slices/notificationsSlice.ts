import { createSlice } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys';
import { NotificationsState } from '#types/redux/slices/notifications';

const initialState: NotificationsState = {
  data: []
};

const notificationsSlice = createSlice({
  initialState,
  name: SLICE.NOTIFICATIONS,
  reducers: {

  }
});

export const {
  reducer: NOTIFICATIONS_REDUCER
} = notificationsSlice;
