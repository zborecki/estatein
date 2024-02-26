import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { LinkComponentProps } from '#types/props/link.types';

export const LinkComponent: FC<LinkComponentProps> = ({
  label,
  sx,
  target,
  to,
  variant = 'caption'
}) => (
  <Typography
    component={Link}
    sx={sx}
    target={target}
    to={to}
    variant={variant}
  >
    { label }
  </Typography>
);
