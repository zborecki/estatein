import { Stack, Typography } from '@mui/material';
import { FC, useMemo } from 'react';

import { LinkComponent } from '#components/LinkComponent';
import { notificationStyles } from '#theme/styles/notification.styles';
import { Notification } from '#types/modules.types';
import { defineEllipsis } from '#utils/defineEllipsis';
import { mergeStyles } from '#utils/mergeStyles';

export const NotificationComponent: FC<Notification> = ({
  button, message
}) => {
  const buttonStyle = useMemo(() => (
    mergeStyles(notificationStyles.typography, { whiteSpace: 'nowrap' })
  ), []);

  const messageStyle = useMemo(() => (
    mergeStyles(notificationStyles.typography, defineEllipsis({ lineClamp: 1 }))
  ), []);

  return (
    <Stack
      alignItems="center"
      flexDirection="row"
      gap="6px"
      justifyContent="center"
    >
      <Typography sx={messageStyle} variant="caption">{ message }</Typography>
      {
        button && (
          <LinkComponent
            label={button.label}
            sx={buttonStyle}
            to={button.to}
            variant="caption"
          />
        )
      }
    </Stack>
  );
};
