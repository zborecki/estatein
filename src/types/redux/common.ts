import { store } from '#redux/settings';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
