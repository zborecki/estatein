import { createAsyncThunk } from '@reduxjs/toolkit';

import { SLICE } from '#redux/keys.redux';
import { getSocials } from '#services/socials.service';
import { convertSocials } from '#utils/api/convertSocials';

export const FETCH_SOCIAL_THUNK = createAsyncThunk(
  `${SLICE.SOCIALS}/FETCH_SOCIALS`,
  async () => {
    try {
      const { data } = await getSocials();

      return {
        data: convertSocials({ data: data.socials })
      };
    } catch {
      return {
        data: []
      };
    }
  }
);
