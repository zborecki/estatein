import { Styles } from '#types/atoms.types';

type Sx = 'description' | 'margin' | 'pattern' | 'title' | 'wrapper';

export const sectionHeaderStyles: Styles<Sx> = {
  description: {
    color: 'text.secondary'
  },
  margin: {
    mb: 7.5
  },
  pattern: {
    mb: 2
  },
  title: {
    display: 'block',
    mb: 1.25,
    textTransform: 'capitalize'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 6
  }
};
