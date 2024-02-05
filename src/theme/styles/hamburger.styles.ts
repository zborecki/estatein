import { Styles } from '#types/atoms.types';

type Sx = 'container' | 'ingredient' | 'root';

const ATTRIBUTE = {
  BUTTON_PX: 0.375,
  BUTTON_PY: 0.875,
  BUTTON_SIZE: 28,
  INGREDIENT_BORDER_RADIUS: 2,
  INGREDIENT_COLOR: 'text.primary',
  INGREDIENT_SIZE: 2
};

export const hamburgerStyles: Styles<Sx> = {
  container: {
    height: '100%',
    position: 'relative',
    width: '100%'
  },
  ingredient: {
    backgroundColor: ATTRIBUTE.INGREDIENT_COLOR,
    borderRadius: ATTRIBUTE.INGREDIENT_BORDER_RADIUS,
    height: ATTRIBUTE.INGREDIENT_SIZE,
    left: 0,
    position: 'absolute',
    top: 'calc(50% - 1px)',
    transition: 'translateY(-50%)',
    width: '100%',
    '&:after, &:before': {
      backgroundColor: ATTRIBUTE.INGREDIENT_COLOR,
      content: '""',
      position: 'absolute'
    },
    ':after': {
      borderRadius: ATTRIBUTE.INGREDIENT_BORDER_RADIUS,
      height: ATTRIBUTE.INGREDIENT_SIZE,
      left: '100%',
      top: 8,
      transform: 'translate(-100%)',
      width: '55%'
    },
    ':before': {
      borderRadius: ATTRIBUTE.INGREDIENT_BORDER_RADIUS,
      height: ATTRIBUTE.INGREDIENT_SIZE,
      left: 0,
      top: -8,
      width: '100%'
    }
  },
  root: {
    backgroundColor: 'grey.600',
    border: 'none',
    borderRadius: 1,
    cursor: 'pointer',
    display: 'block',
    height: ATTRIBUTE.BUTTON_SIZE,
    px: ATTRIBUTE.BUTTON_PX,
    py: ATTRIBUTE.BUTTON_PY,
    transition: 'background-color .25s ease-out',
    width: ATTRIBUTE.BUTTON_SIZE
  }
};
