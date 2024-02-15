import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { lazyImageCSS } from '#theme/styles/lazyImage.styles';
import { LazyImageComponentProps } from '#types/props/lazyImage.types';

export const LazyImageComponent: FC<LazyImageComponentProps> = ({
  alt, height, src, width, wrapperProps
}) => (
  <LazyLoadImage
    alt={alt}
    effect="blur"
    height={height}
    src={src}
    style={lazyImageCSS.image}
    width={width}
    wrapperProps={wrapperProps}
  />
);
