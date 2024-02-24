import { PayloadAction } from '@reduxjs/toolkit';

import { ThunkState } from '#types/redux/common.types';

export type SetStatusAction = PayloadAction<ThunkState>;
