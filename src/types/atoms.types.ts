import { Palette, SxProps, Theme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { CSSProperties } from 'react';

export type Anchor = {
  [key in 'label' | 'to']: string;
};

export type CSSStyles<T extends string> = {
  [key in T]?: CSSProperties;
};

export type Currency = 'USD';

export interface Image {
  alt?: string;
  src: string;
}

export interface Information {
  description: string;
  title: string;
}

export interface Link extends Anchor {
  isExternalLink?: boolean;
}

export type Location = {
  [key in 'latitude' | 'longitude']: number;
};

export type SocialType = 'facebook' | 'linkedin' | 'youtube';

export type Style = SxProps<Theme>;

export type Styles<T extends string> = {
  [key in T]?: Style;
};

export type Typography = TypographyOptions | ((palette: Palette) => TypographyOptions);
