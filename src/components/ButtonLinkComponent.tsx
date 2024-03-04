import { Button } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTE } from '#router/paths.router';
import { ButtonLinkComponentProps } from '#types/props/buttonLink.types';

export const ButtonLinkComponent: FC<ButtonLinkComponentProps> = ({
  children,
  isExternalLink,
  to = ROUTE.HOME,
  ...rest
}) => (
  <Button
    component={Link}
    target={isExternalLink ? '_blank' : undefined}
    to={to}
    {...rest}
  >
    { children }
  </Button>
);
