import { store } from '#/redux/settings.redux';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export interface ThunkState {
  message: string;
  status: 'error' | 'idle' | 'loading' | 'success';
}
