import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { LinkComponentProps } from '#types/props/link.types';

export const LinkComponent: FC<LinkComponentProps> = ({
  label,
  sx,
  to,
  variant = 'caption'
}) => (
  <Typography
    component={Link}
    sx={sx}
    to={to}
    variant={variant}
  >
    { label }
  </Typography>
);
