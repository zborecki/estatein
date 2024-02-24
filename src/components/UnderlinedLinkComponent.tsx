import { Link as MuiLink } from '@mui/material';
import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { underlinedLinkStyles } from '#theme/styles/underlinedLink.styles';
import { UnderlinedLinkComponentProps } from '#types/props/underlinedLink.types';
import { mergeStyles } from '#utils/mergeStyles';

export const UnderlinedLinkComponent: FC<UnderlinedLinkComponentProps> = ({
  children, sx, to
}) => {
  const memoizedStyles = useMemo(() => mergeStyles(underlinedLinkStyles.root, sx), [sx]);

  return (
    <MuiLink
      component={Link}
      sx={memoizedStyles}
      to={to}
      variant="body1"
    >
      { children }
    </MuiLink>
  );
};
