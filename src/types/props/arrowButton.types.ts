import { ActionProps, UnknownElementProps } from '#types/props/common.types';

export interface ArrowButtonComponentProps
  extends ActionProps, UnknownElementProps {
  disabled?: boolean;
  variant?: 'left' | 'right';
}
