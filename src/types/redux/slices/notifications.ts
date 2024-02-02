import { Link } from '#types/atoms';

export interface NotificationsState {
  data: {
    button?: Link
    message: string;
  }[];
}
