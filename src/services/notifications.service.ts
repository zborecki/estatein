import { NOTIFICATIONS_QUERY } from '#graphql/queries/notifications.query';
import { api } from '#graphql/settings.graphql';
import { Notification } from '#types/modules.types';

export const getNotifications = async () => api.query<Notification[]>({
  query: NOTIFICATIONS_QUERY
});
