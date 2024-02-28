import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '#i18n/settings.i18n';
import { SLICE } from '#redux/keys.redux';
import { SET_NAVIGATION_STATUS } from '#redux/slices/navigation.slice';
import { getNavigation } from '#services/navigation.service';
import { RootState } from '#types/redux/common.types';

export const FETCH_NAVIGATION_THUNK = createAsyncThunk(
  `${SLICE.NAVIGATION}/FETCH_NOTIFICATIONS`,
  async (_, { dispatch, getState }) => {
    try {
      const x = await getNavigation();

      console.log(x);

      return {
        data: []
      };
    } catch {
      const { data } = (getState() as RootState).navigation;

      dispatch(SET_NAVIGATION_STATUS({
        message: i18n.t('error.common'),
        status: 'error'
      }));

      return {
        data
      };
    }
  }
);
