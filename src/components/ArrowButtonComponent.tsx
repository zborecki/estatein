import { IconButton } from '@mui/material';
import { FC } from 'react';

import { ArrowIcon } from '#assets/icons/ArrowIcon';
import { arrowButtonStyles } from '#theme/styles/arrowButton.styles';
import { ArrowButtonComponentProps } from '#types/props/arrowButton.types';
import { mergeStyles } from '#utils/mergeStyles';

export const ArrowButtonComponent: FC<ArrowButtonComponentProps> = ({
  ariaLabel,
  disabled,
  onClick,
  variant = 'right'
}) => (
  <IconButton
    aria-label={ariaLabel}
    disabled={disabled}
    sx={arrowButtonStyles.root}
    onClick={onClick}
  >
    <ArrowIcon
      sx={mergeStyles(arrowButtonStyles.icon, {
        transform: variant === 'left' ? 'rotate(180deg)' : undefined
      })}
    />
  </IconButton>
);
