import { FC } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NotificationComponent } from '#components/NotificationComponent';
import { notificationBarCSS } from '#theme/styles/notificationBar.styles';
import { NotificationBarSwiperModuleProps } from '#types/props/notificationBar.types';
import { generateKey } from '#utils/generateKey';
import 'swiper/css';

export const NotificationBarSwiperModule: FC<NotificationBarSwiperModuleProps> = ({
  notifications
}) => (
  <Swiper
    autoplay={{
      delay: 2000,
      pauseOnMouseEnter: true
    }}
    direction="vertical"
    modules={[Autoplay]}
    style={notificationBarCSS.swiper}
  >
    {
      notifications.map(({ button, message }) => (
        <SwiperSlide
          key={generateKey()}
          style={notificationBarCSS.slide}
        >
          <NotificationComponent
            button={button}
            message={message}
          />
        </SwiperSlide>
      ))
    }
  </Swiper>
);
