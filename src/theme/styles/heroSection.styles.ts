import { Styles } from '#types/atoms.types';

type Sx = 'buttons' | 'container' | 'curvedButtonDummyPlug' | 'curvedButtonRoot'
| 'description' | 'introduction' | 'panel' | 'root' | 'title';

export const heroSectionStyles: Styles<Sx> = {
  buttons: {
    mb: 6.25
  },
  container: {
    display: 'grid',
    gap: 7.5,
    gridTemplateColumns: 'repeat(2,1fr)'
  },
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
  },
  description: {
    color: 'grey.50'
  },
  introduction: {
    mb: 6.25
  },
  panel: {
    pt: 12.25,
    pl: 10
  },
  root: {
    backgroundColor: 'grey.700'
  },
  title: {
    mb: 2.5
  }
};
