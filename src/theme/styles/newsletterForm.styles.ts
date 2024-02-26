import { Styles } from '#types/atoms.types';

type Sx = 'button' | 'sendIcon';

export const newsletterFormStyles: Styles<Sx> = {
  button: {
    ':hover': {
      '& .MuiSvgIcon-root': {
        path: {
          fill: ({ palette: { primary } }) => primary.main
        }
      }
    }
  },
  sendIcon: {
    '&.MuiSvgIcon-root': {
      path: {
        fill: ({ palette: { common } }) => common.white
      }
    }
  }
};
