import { createAsyncThunk } from '@reduxjs/toolkit';

import { getNotificationsMockup } from '#mockups/promises/notifications.promise';
import { SLICE } from '#redux/keys.redux';
import { getNotifications } from '#services/notifications.service';

export const FETCH_NOTIFICATIONS_MOCKUP = createAsyncThunk(
  `${SLICE.NOTIFICATIONS}/FETCH_NOTIFICATIONS_MOCKUP`,
  async () => {
    const notifications = await getNotificationsMockup();

    return {
      data: notifications
    };
  }
);

export const FETCH_NOTIFICATIONS_THUNK = createAsyncThunk(
  `${SLICE.NOTIFICATIONS}/FETCH_NOTIFICATIONS`,
  async () => {
    const { data } = await getNotifications();

    return {
      data
    };
  }
);
