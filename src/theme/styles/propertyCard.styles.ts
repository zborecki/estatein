import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'action' | 'body' | 'description' | 'image' | 'location' | 'price' | 'root' | 'title';

export const propertyCardStyles: Styles<Sx> = {
  action: {
    display: 'grid',
    gridTemplateColumns: '1fr minmax(0, 238px)',
    [defineBreakpoint('sm')]: {
      gridTemplateColumns: 'none',
      rowGap: 2
    }
  },
  body: {
    mb: 3
  },
  description: {
    color: ({ palette }) => palette.grey[50],
    display: 'inline'
  },
  image: {
    borderRadius: 10 / 8,
    minHeight: 220,
    objectFit: 'cover'
  },
  location: {
    mb: 2
  },
  price: {
    color: ({ palette }) => palette.grey[50]
  },
  root: {
    p: 30 / 8
  },
  title: {
    color: ({ palette: { common } }) => common.white,
    display: 'block',
    mb: 4 / 8,
    textDecoration: 'none'
  }
};
