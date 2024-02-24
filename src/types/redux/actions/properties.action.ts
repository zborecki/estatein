import { PayloadAction } from '@reduxjs/toolkit';

export type PropertiesSetOffsetAction = PayloadAction<{
  offset: number;
}>;

export type PropertiesSetSkipAction = PayloadAction<{
  skip: number;
}>;
