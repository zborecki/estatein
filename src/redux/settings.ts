import { configureStore } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys';
import { NOTIFICATIONS_REDUCER } from '#redux/slices/notificationsSlice';

export const store = configureStore({
  reducer: {
    [SLICE.NOTIFICATIONS]: NOTIFICATIONS_REDUCER
  }
});
