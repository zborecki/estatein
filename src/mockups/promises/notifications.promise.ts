import { NOTIFICATIONS_MOCKUP } from '#mockups/notifications.mockup';
import { defineMockupPromise } from '#utils/defineMockupPromise';

export const getNotificationsMockup = async () => defineMockupPromise({
  data: NOTIFICATIONS_MOCKUP
});
