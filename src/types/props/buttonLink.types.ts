import { ButtonProps } from '@mui/material';

export interface ButtonLinkComponentProps extends ButtonProps {
  isExternalLink?: boolean;
  to?: string;
}

export interface ButtonLinksComponentProps {
  buttons: ButtonLinkComponentProps[];
}
