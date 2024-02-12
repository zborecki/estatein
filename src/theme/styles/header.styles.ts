import { Styles } from '#types/atoms.types';

type Sx = 'container' | 'navigation' | 'root';

export const headerStyles: Styles<Sx> = {
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative'
  },
  navigation: {
    position: 'absolute',
    right: '50%',
    top: '50%',
    transform: 'translate(50%,-50%)'
  },
  root: {
    backgroundColor: 'grey.600',
    borderBottomColor: 'grey.200',
    borderBottomStyle: 'solid',
    borderTopColor: 'grey.200',
    borderTopStyle: 'solid',
    borderWidth: 1,
    py: '14px'
  }
};
