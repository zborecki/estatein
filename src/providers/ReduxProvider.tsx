import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '#redux/settings';

export const ReduxProvider: FC<PropsWithChildren> = ({
  children
}) => (
  <Provider store={store}>
    { children }
  </Provider>
);
