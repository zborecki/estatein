import { Avatar, Box, Typography } from '@mui/material';
import { FC } from 'react';

import { profileCardStyles } from '#theme/styles/profileCard.styles';
import { ProfileCardComponentProps } from '#types/props/profileCard.types';

export const ProfileCardComponent: FC<ProfileCardComponentProps> = ({
  avatar, companyName, fullName
}) => (
  <Box sx={profileCardStyles.root}>
    <Avatar alt={fullName} src={avatar} />
    <Box>
      <Typography>{ fullName }</Typography>
      <Typography sx={profileCardStyles.companyName} variant="body2">{ companyName }</Typography>
    </Box>
  </Box>
);
