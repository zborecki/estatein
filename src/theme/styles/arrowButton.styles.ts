import { Styles } from '#types/atoms.types';

type Sx = 'icon' | 'root';

export const arrowButtonStyles: Styles<Sx> = {
  icon: {
    path: {
      fill: ({ palette: { common } }) => common.white,
      transition: 'fill .2 ease-out'
    }
  },
  root: {
    backgroundColor: ({ palette: { grey } }) => grey[600],
    borderColor: ({ palette: { grey } }) => grey[500],
    borderStyle: 'solid',
    borderWidth: 1,
    maxWidth: 'fit-content',
    transition: 'border-color .2s ease-out',
    ':hover': {
      backgroundColor: ({ palette: { grey } }) => grey[500],
      borderColor: ({ palette: { grey } }) => grey[400]
    },
    '&.Mui-disabled': {
      backgroundColor: ({ palette: { grey } }) => grey[700],
      borderColor: ({ palette: { grey } }) => grey[500],
      '& .MuiSvgIcon-root path': {
        fill: ({ palette: { grey } }) => grey[100]
      }
    }
  }
};
