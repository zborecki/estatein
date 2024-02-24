import { Outlet } from 'react-router-dom';

import { FooterComponent } from '#components/FooterComponent';
import { HeaderComponent } from '#components/HeaderComponent';
import { NotificationBarComponent } from '#components/NotificationBarComponent';

export const BaseLayout = () => (
  <>
    <NotificationBarComponent />
    <HeaderComponent />
    <Outlet />
    <FooterComponent />
  </>
);
