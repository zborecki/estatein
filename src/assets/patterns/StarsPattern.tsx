import { Box } from '@mui/material';
import { FC } from 'react';

import { BaseProps } from '#types/props/common.types';

export const StarsPattern: FC<BaseProps> = ({ sx }) => (
  <Box
    component="svg"
    fill="none" height="24px"
    sx={sx} viewBox="0 0 55 24"
    width="55px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_139_6788)">
      <path
        clipRule="evenodd" d="M24 12C17.3742 12 12.0027 17.37 12 23.9952C11.9974 17.3716 6.62847 12.0026 0.00488281 12C6.62562 11.9974 11.9928 6.63303 12 0.0133667C12 0.0133667 12 0.0133667 12.0001 0.0133667C12.0073 6.63464 17.3771 12 24 12Z"
        fill="#666666" fillRule="evenodd"
      />
    </g>
    <g clipPath="url(#clip1_139_6788)">
      <path
        clipRule="evenodd" d="M43.1998 12C43.1997 12 43.1996 12 43.1995 12C39.232 12 36.014 8.79087 35.9996 4.82672C35.9851 8.7908 32.7672 11.9999 28.7998 12V12C32.7673 12.0001 35.9853 15.2093 35.9996 19.1735C36.0138 15.2092 39.2319 12 43.1995 12H43.1998C43.1998 12 43.1998 12 43.1998 12Z"
        fill="#333333" fillRule="evenodd"
      />
    </g>
    <g clipPath="url(#clip2_139_6788)">
      <path
        clipRule="evenodd" d="M51.3603 8.64374C51.3623 10.4944 52.8604 11.9946 54.7103 12C52.8592 12.0054 51.3603 13.5077 51.3603 15.36L51.3603 15.3637H51.3601L51.3601 15.36C51.3601 13.5076 49.861 12.0052 48.0098 12C49.8597 11.9948 51.3581 10.4945 51.3601 8.64374C51.3601 8.64374 51.3602 8.64374 51.3603 8.64374Z"
        fill="#333333" fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_139_6788">
        <rect
          fill="white" height="24"
          width="24"
        />
      </clipPath>
      <clipPath id="clip1_139_6788">
        <rect
          fill="white" height="14.4"
          transform="translate(28.7998 4.79999)" width="14.4"
        />
      </clipPath>
      <clipPath id="clip2_139_6788">
        <rect
          fill="white" height="6.72"
          transform="translate(48 8.64001)" width="6.72"
        />
      </clipPath>
    </defs>
  </Box>
);
