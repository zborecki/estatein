import { Paper, Typography } from '@mui/material';
import { FC } from 'react';

import { LinkIcon } from '#/assets/icons/LinkIcon';
import { itsSimpleCardStyles } from '#theme/styles/itsSimpleCard.styles';
import { ItsSimpleCardComponentProps } from '#types/props/itsSimpleCard.types';

export const ItsSimpleCardComponent: FC<ItsSimpleCardComponentProps> = ({
  icon: Icon,
  title
}) => (
  <Paper sx={itsSimpleCardStyles.root}>
    <LinkIcon sx={itsSimpleCardStyles.arrow} />
    <Icon sx={itsSimpleCardStyles.icon} />
    <Typography
      sx={itsSimpleCardStyles.title}
      variant="subtitle2"
    >
      { title }
    </Typography>
  </Paper>
);
