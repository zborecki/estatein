import { RouterProvider } from 'react-router-dom';

import { ReduxProvider } from '#providers/ReduxProvider';
import { UIProvider } from '#providers/UIProvider';
import { router } from '#router/settings';

export const App = () => (
  <ReduxProvider>
    <UIProvider>
      <RouterProvider router={router} />
    </UIProvider>
  </ReduxProvider>
);
