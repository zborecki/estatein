import { ButtonProps } from '@mui/material';

export interface ButtonLinkComponentProps extends ButtonProps {
  to?: string;
}

export interface ButtonLinksComponentProps {
  buttons: ButtonLinkComponentProps[];
}
