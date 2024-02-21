import { Box } from '@mui/material';
import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { lazyImageCSS } from '#theme/styles/lazyImage.styles';
import { LazyImageComponentProps } from '#types/props/lazyImage.types';

export const LazyImageComponent: FC<LazyImageComponentProps> = ({
  alt, height, src, sx, width, wrapperProps
}) => (
  <Box
    alt={alt}
    component={LazyLoadImage}
    effect="blur"
    height={height}
    src={src}
    style={lazyImageCSS.image}
    sx={sx}
    title={alt}
    width={width}
    wrapperProps={{
      ...wrapperProps,
      style: {
        display: 'block',
        ...wrapperProps?.style
      }
    }}
  />
);
