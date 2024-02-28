import { configureStore } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { NAVIGATION_REDUCER } from '#redux/slices/navigation.slice';
import { NOTIFICATIONS_REDUCER } from '#redux/slices/notifications.slice';
import { PROPERTIES_REDUCER } from '#redux/slices/properties.slice';
import { SOCIALS_REDUCER } from '#redux/slices/socials.slice';

export const store = configureStore({
  reducer: {
    [SLICE.NAVIGATION]: NAVIGATION_REDUCER,
    [SLICE.NOTIFICATIONS]: NOTIFICATIONS_REDUCER,
    [SLICE.PROPERTIES]: PROPERTIES_REDUCER,
    [SLICE.SOCIALS]: SOCIALS_REDUCER
  }
});
