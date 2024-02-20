import { defineBreakpoint } from '#theme/breakpoints.theme';
import { Styles } from '#types/atoms.types';

type Sx = 'meta' | 'root';

export const paginationStyles: Styles<Sx> = {
  meta: {
    color: ({ palette }) => palette.grey[50],
    span: {
      color: ({ palette: { common } }) => common.white
    },
    textTransform: 'lowercase'
  },
  root: {
    alignItems: 'center',
    borderTopColor: ({ palette }) => palette.grey[500],
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    display: 'grid',
    gap: 10 / 8,
    gridTemplateColumns: '1fr repeat(2,auto)',
    mt: 5,
    py: 2,
    '& p.MuiTypography-root': {
      gridRow: 1
    },
    [defineBreakpoint('md')]: {
      gridTemplateColumns: 'auto 1fr auto',
      '& p.MuiTypography-root': {
        gridRow: 'inherit',
        textAlign: 'center'
      }
    },
    [defineBreakpoint('sm')]: {
      border: 'none',
      mt: 30 / 8
    }
  }
};
