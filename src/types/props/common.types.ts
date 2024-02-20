import { Style } from '#/types/atoms.types';

export interface ActionProps {
  onClick?: () => void;
}

export interface ChildrenProps {
  children: string;
}

export interface BaseProps {
  sx?: Style;
}

export interface UnknownElementProps {
  ariaLabel?: string;
}
