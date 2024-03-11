import { PropsWithChildren } from 'react';

import { Style } from '#types/atoms.types';

export interface BaseModalComponentProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  sx?: {
    [key in 'modal' | 'paper']?: Style;
  }
}
