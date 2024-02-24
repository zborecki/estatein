import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '#i18n/settings.i18n';
import { getNotificationsMockup } from '#mockups/promises/notifications.promise';
import { SLICE } from '#redux/keys.redux';
import { SET_NOTIFICATIONS_STATUS } from '#redux/slices/notifications.slice';
import { getNotifications } from '#services/notifications.service';
import { RootState } from '#types/redux/common.types';

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
  async (_, { dispatch, getState }) => {
    try {
      return {
        data: (await getNotifications()).data
      };
    } catch {
      const { notifications } = getState() as RootState;

      dispatch(SET_NOTIFICATIONS_STATUS({
        message: i18n.t('error.common'),
        status: 'error'
      }));

      return {
        data: notifications.data
      };
    }
  }
);
