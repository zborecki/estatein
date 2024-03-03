import { FC, memo } from 'react';

import { FacebookIcon } from '#assets/icons/FacebookIcon';
import { LinkedInIcon } from '#assets/icons/LinkedInIcon';
import { YouTubeIcon } from '#assets/icons/YouTubeIcon';
import { SocialIconModuleProps } from '#types/props/social.types';

const SocialIcon: FC<SocialIconModuleProps> = ({ sx, type }) => {
  switch (type) {
    case 'facebook':
      return <FacebookIcon sx={sx} />;
    case 'linkedin':
      return <LinkedInIcon sx={sx} />;
    case 'youtube':
      return <YouTubeIcon sx={sx} />;
    default:
      return <FacebookIcon sx={sx} />;
  }
};

export const SocialIconModule = memo(SocialIcon);
