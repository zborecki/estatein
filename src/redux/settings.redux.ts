import { configureStore } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { NOTIFICATIONS_REDUCER } from '#redux/slices/notifications.slice';
import { PROPERTIES_REDUCER } from '#redux/slices/properties.slice';

export const store = configureStore({
  reducer: {
    [SLICE.NOTIFICATIONS]: NOTIFICATIONS_REDUCER,
    [SLICE.PROPERTIES]: PROPERTIES_REDUCER
  }
});
