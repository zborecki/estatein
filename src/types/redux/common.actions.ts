import { PayloadAction } from '@reduxjs/toolkit';

import { ThunkState } from '#types/redux/common.types';

export type SetOffsetAction = PayloadAction<{
  offset: number;
}>;

export type SetSkipAction = PayloadAction<{
  skip: number;
}>;

export type SetStatusAction = PayloadAction<ThunkState>;
