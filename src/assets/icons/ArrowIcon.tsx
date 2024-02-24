import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

export const ArrowIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon
    fill="none"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M3.59961 12C3.59961 11.5029 4.00255 11.1 4.49961 11.1L17.2651 11.1L12.2758 6.34874C11.9175 6.00423 11.9063 5.43449 12.2509 5.0762C12.5954 4.7179 13.1651 4.70673 13.5234 5.05125L20.1234 11.3512C20.2999 11.5209 20.3996 11.7552 20.3996 12C20.3996 12.2448 20.2999 12.4791 20.1234 12.6487L13.5234 18.9487C13.1651 19.2933 12.5954 19.2821 12.2509 18.9238C11.9063 18.5655 11.9175 17.9958 12.2758 17.6512L17.2651 12.9L4.49961 12.9C4.00255 12.9 3.59961 12.4971 3.59961 12Z"
      fill="black"
      fillRule="evenodd"
    />
  </SvgIcon>
);
