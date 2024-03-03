import { PayloadAction } from '@reduxjs/toolkit';

import { Social } from '#types/modules.types';

export type SocialsSetDataAction = PayloadAction<{
  data: Social[];
}>;
