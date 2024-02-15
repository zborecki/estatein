import { Image } from '#types/atoms.types';

export type LazyImageSize = number | string;

export interface LazyImageComponentProps extends Image {
  height?: LazyImageSize;
  width?: LazyImageSize;
  wrapperProps?: React.HTMLAttributes<HTMLSpanElement> | undefined;
}
