import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '#i18n/settings.i18n';
import { SLICE } from '#redux/keys.redux';
import { SET_PROPERTIES_STATUS } from '#redux/slices/properties.slice';
import { getPropertiesPagination } from '#services/properties.service';
import { RootState } from '#types/redux/common.types';
import { convertProperties } from '#utils/api/convertProperties';

export const FETCH_PROPERTIES_THUNK = createAsyncThunk(
  `${SLICE.PROPERTIES}/FETCH_PROPERTIES`,
  async (_, { dispatch, getState }) => {
    const { properties } = getState() as RootState;

    try {
      const { data } = await getPropertiesPagination({
        offset: properties.offset,
        skip: properties.skip
      });

      return convertProperties(data.propertiesConnection);
    } catch {
      dispatch(SET_PROPERTIES_STATUS({
        message: i18n.t('error.common'),
        status: 'error'
      }));

      return {
        aggregate: properties.aggregate,
        data: properties.data,
        pageInfo: properties.pageInfo
      };
    }
  }
);
