import { IconButton } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SocialIconModule } from '#components/modules/SocialIconModule';
import { socialStyles } from '#theme/styles/social.types';
import { Social } from '#types/modules.types';

export const SocialComponent: FC<Social> = ({
  type, url
}) => (
  <IconButton
    component={Link}
    sx={socialStyles.root}
    target="_blank"
    to={url}
  >
    <SocialIconModule
      sx={socialStyles.icon}
      type={type}
    />
  </IconButton>
);
