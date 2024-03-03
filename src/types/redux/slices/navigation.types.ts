import { Link } from '#types/atoms.types';
import { ThunkState } from '#types/redux/common.types';

export interface NavigationState extends ThunkState {
  data: {
    [data in 'footer']: Link[];
  }
}
