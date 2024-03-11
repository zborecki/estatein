import { Typography } from '@mui/material';
import { FC } from 'react';

import { BaseModalComponent } from '#components/BaseModalComponent';
import { modalStyles } from '#theme/styles/modal.styles';
import { ModalComponentProps } from '#types/props/modal.types';

export const ModalComponent: FC<ModalComponentProps> = ({
  children, isOpen, onClose, sx, title
}) => (
  <BaseModalComponent
    isOpen={isOpen}
    sx={sx}
    onClose={onClose}
  >
    <Typography sx={modalStyles.title} variant="h6">{ title }</Typography>
    { children }
  </BaseModalComponent>
);
