import { Styles } from '#types/atoms.types';

type Sx = 'modal' | 'paper';

export const baseModalStyles: Styles<Sx> = {
  modal: {
    mx: 2
  },
  paper: {
    backgroundColor: ({ palette }) => palette.grey[700],
    left: '50%',
    maxWidth: 480,
    p: 3,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%'
  }
};
