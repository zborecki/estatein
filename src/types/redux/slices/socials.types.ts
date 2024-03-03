import { Social } from '#types/modules.types';
import { ThunkState } from '#types/redux/common.types';

export interface SocialsState extends ThunkState {
  data: Social[];
}
