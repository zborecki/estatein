import { commonStyles } from '#theme/styles/common.styles';
import { Styles } from '#types/atoms.types';

type Sx = 'heading' | 'list' | 'listItem';

export const anchorsBlockStyles: Styles<Sx> = {
  heading: {
    display: 'block',
    color: ({ palette }) => palette.grey[50],
    mb: 3,
    textTransform: 'capitalize'
  },
  list: {
    ...commonStyles.list,
    gap: 2
  },
  listItem: {
    color: ({ palette: { common } }) => common.white,
    textDecoration: 'none'
  }
};
