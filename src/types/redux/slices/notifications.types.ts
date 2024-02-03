import { Notification } from '#types/modules.types';
import { ThunkState } from '#types/redux/common.types';

export interface NotificationsState extends ThunkState {
  data: Notification[];
}
