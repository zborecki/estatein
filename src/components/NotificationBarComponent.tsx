import { Box, Container } from '@mui/material';
import { useEffect } from 'react';

import { WavesPattern } from '#assets/patterns/WavesPattern';
import { NotificationBarLoaderModule } from '#components/modules/NotificationBarLoaderModule';
import { NotificationBarSwiperModule } from '#components/modules/NotificationBarSwiperModule';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';
import { FETCH_NOTIFICATIONS_MOCKUP } from '#redux/thunks/notifications.thunk';
import { notificationBarStyles } from '#theme/styles/notificationBar.styles';
import { isIOS } from '#utils/getPlatform';

export const NotificationBarComponent = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector().notifications;

  useEffect(() => {
    // dispatch(FETCH_NOTIFICATIONS_THUNK());
    dispatch(FETCH_NOTIFICATIONS_MOCKUP());
  }, []);

  return (
    <Box
      className={isIOS ? 'ios-notch' : undefined}
      component="div"
      sx={notificationBarStyles.root}
    >
      <WavesPattern sx={notificationBarStyles.pattern} />
      <Container maxWidth="xl+">
        {
          status === 'success'
            ? <NotificationBarSwiperModule notifications={data} />
            : <NotificationBarLoaderModule />
        }
      </Container>
    </Box>
  );
};
