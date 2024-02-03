import { createHashRouter } from 'react-router-dom';

import { BaseLayout } from '#layouts/BaseLayout';
import { ROUTE } from '#router/paths.router';
import { HomeView } from '#views/HomeView';

export const router = createHashRouter([
  {
    children: [
      {
        element: <HomeView />,
        path: ROUTE.HOME
      }
    ],
    element: <BaseLayout />
  }
]);
