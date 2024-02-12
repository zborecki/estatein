import { Styles } from '#types/atoms.types';

type Sx = 'curvedButtonDummyPlug' | 'curvedButtonRoot';

export const heroSectionStyles: Styles<Sx> = {
  curvedButtonDummyPlug: {
    backgroundColor: 'grey.600',
    borderColor: 'grey.500',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    left: '50%',
    maxWidth: 'fit-content',
    p: 2,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  curvedButtonRoot: {
    borderRadius: '50%',
    maxWidth: 'fit-content',
    position: 'relative'
  }
};
