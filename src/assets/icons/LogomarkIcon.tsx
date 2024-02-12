import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

export const LogomarkIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon
    fill="none"
    height="35"
    viewBox="0 0 34 35"
    width="34"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{
      display: 'block'
    }}
  >
    <path
      d="M17 34.5C7.61222 34.5 0 26.8878 0 17.5H17V34.5Z"
      fill="#703BF7"
    />
    <path
      d="M0 0.5C9.38778 0.5 17 8.11222 17 17.5H0V0.5Z"
      fill="#703BF7"
    />
    <path
      d="M17 34.5C26.3878 34.5 34 26.8878 34 17.5H17V34.5Z"
      fill="#703BF7"
    />
    <path
      d="M34 17.5C34 8.11222 26.3878 0.5 17 0.5V17.5H34Z"
      fill="#703BF7"
    />
  </SvgIcon>
);
