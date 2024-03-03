import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { CatchAnchorsComponent } from '#components/CatchAnchorsComponent';
import { FooterComponent } from '#components/FooterComponent';
import { HeaderComponent } from '#components/HeaderComponent';
import { NotificationBarComponent } from '#components/NotificationBarComponent';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { FETCH_NAVIGATION_THUNK } from '#redux/thunks/navigation.thunk';

export const BaseLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FETCH_NAVIGATION_THUNK());
  }, []);

  return (
    <>
      <CatchAnchorsComponent />
      <NotificationBarComponent />
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};
