import { Modal, Paper } from '@mui/material';
import { FC, useMemo } from 'react';

import { baseModalStyles } from '#theme/styles/baseModal.styles';
import { BaseModalComponentProps } from '#types/props/baseModal.types';
import { mergeStyles } from '#utils/mergeStyles';

export const BaseModalComponent: FC<BaseModalComponentProps> = ({
  children, isOpen, onClose, sx
}) => {
  const modalStyles = useMemo(() => mergeStyles(
    baseModalStyles.modal,
    sx?.modal
  ), [sx?.modal]);

  const paperStyles = useMemo(() => mergeStyles(
    baseModalStyles.paper,
    sx?.paper
  ), [sx?.paper]);

  return (
    <Modal
      open={isOpen}
      sx={modalStyles}
      onClose={onClose}
    >
      <Paper sx={paperStyles}>
        { children }
      </Paper>
    </Modal>
  );
};
