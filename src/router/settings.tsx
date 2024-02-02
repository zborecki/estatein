import { createHashRouter } from 'react-router-dom';

import { ROUTE } from '#router/paths';
import { HomeView } from '#views/HomeView';

export const router = createHashRouter([
  {
    children: [

    ],
    element: <HomeView />,
    path: ROUTE.HOME
  }
]);
