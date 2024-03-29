import { TypographyVariant } from '@mui/material';

import { Link } from '#types/atoms.types';
import { BaseProps } from '#types/props/common.types';

export interface LinkComponentProps extends BaseProps, Link {
  target?: '_blank' | '_self';
  variant?: TypographyVariant;
}
