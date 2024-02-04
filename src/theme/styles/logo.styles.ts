import { BOOTSTRAP_BREAKPOINT } from '#/constants/breakpoints.constants';
import { Styles } from '#types/atoms.types';

type Sx = 'logomark';

export const logoStyles: Styles<Sx> = {
  logomark: {
    fontSize: '34px',
    [`@media screen and (max-width: ${BOOTSTRAP_BREAKPOINT.LG}px)`]: {
      fontSize: '28px'
    }
  }
};
