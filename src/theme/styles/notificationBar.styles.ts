import { CSSStyles, Styles } from '#types/atoms.types';

type CSS = 'slide' | 'swiper';
type Sx = 'loading' | 'pattern' | 'root';

export const notificationBarCSS: CSSStyles<CSS> = {
  slide: {
    display: 'flex',
    justifyContent: 'center'
  },
  swiper: {
    height: '50px'
  }
};

export const notificationBarStyles: Styles<Sx> = {
  loading: {
    alignItems: 'center',
    color: 'text.primary',
    display: 'flex',
    height: '50px',
    justifyContent: 'center',
    ':after': {
      content: '"..."'
    }
  },
  pattern: {
    overflow: 'hidden',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 0
  },
  root: {
    backgroundColor: 'background.paper',
    overflow: 'hidden',
    position: 'relative'
  }
};
