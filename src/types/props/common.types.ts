import { Style } from '#/types/atoms.types';

export interface BaseProps {
  sx?: Style;
}

export interface SVGProps extends BaseProps {
  color?: string;
}
