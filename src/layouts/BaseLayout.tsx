import { Outlet } from 'react-router-dom';

import { NotificationBarComponent } from '#components/NotificationBarComponent';

export const BaseLayout = () => (
  <>
    <NotificationBarComponent />
    <Outlet />
  </>
);
