import { configureStore } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { FAQ_REDUCER } from '#redux/slices/faq.slice';
import { NAVIGATION_REDUCER } from '#redux/slices/navigation.slice';
import { NOTIFICATIONS_REDUCER } from '#redux/slices/notifications.slice';
import { PROPERTIES_REDUCER } from '#redux/slices/properties.slice';
import { SOCIALS_REDUCER } from '#redux/slices/socials.slice';
import { TESTIMONIALS_REDUCER } from '#redux/slices/testimonials.slice';

export const store = configureStore({
  reducer: {
    [SLICE.FAQ]: FAQ_REDUCER,
    [SLICE.NAVIGATION]: NAVIGATION_REDUCER,
    [SLICE.NOTIFICATIONS]: NOTIFICATIONS_REDUCER,
    [SLICE.PROPERTIES]: PROPERTIES_REDUCER,
    [SLICE.SOCIALS]: SOCIALS_REDUCER,
    [SLICE.TESTIMONIALS]: TESTIMONIALS_REDUCER
  }
});
