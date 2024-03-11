import { AppBar } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { CatchAnchorsComponent } from '#components/CatchAnchorsComponent';
import { FooterComponent } from '#components/FooterComponent';
import { HeaderComponent } from '#components/HeaderComponent';
import { NotificationBarComponent } from '#components/NotificationBarComponent';
import { baseLayoutStyles } from '#theme/styles/baseLayout.styles';

export const BaseLayout = () => (
  <>
    <CatchAnchorsComponent />
    <AppBar position="sticky" sx={baseLayoutStyles.header}>
      <NotificationBarComponent />
      <HeaderComponent />
    </AppBar>
    <Outlet />
    <FooterComponent />
  </>
);
