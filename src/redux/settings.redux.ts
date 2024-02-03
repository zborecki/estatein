import { configureStore } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { NOTIFICATIONS_REDUCER } from '#redux/slices/notifications.slice';

export const store = configureStore({
  reducer: {
    [SLICE.NOTIFICATIONS]: NOTIFICATIONS_REDUCER
  }
});
