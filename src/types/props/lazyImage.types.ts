import { Image } from '#types/atoms.types';
import { BaseProps } from '#types/props/common.types';

export type LazyImageSize = number | string;

export interface LazyImageComponentProps extends Image, BaseProps {
  height?: LazyImageSize;
  width?: LazyImageSize;
  wrapperProps?: React.HTMLAttributes<HTMLSpanElement> | undefined;
}
