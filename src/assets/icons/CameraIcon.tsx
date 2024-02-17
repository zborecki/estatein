import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

import { mergeStyles } from '#utils/mergeStyles';

export const CameraIcon: FC<SvgIconProps> = ({ sx, ...rest }) => (
  <SvgIcon
    fill="none" height="60"
    sx={mergeStyles({ fill: 'none' }, sx)}
    viewBox="0 0 61 60"
    width="61"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect
      height="59" rx="29.5"
      stroke="url(#paint0_linear_139_6458)" width="59"
      x="0.75" y="0.5"
    />
    <rect
      height="59" rx="29.5"
      stroke="url(#paint1_linear_139_6458)" width="59"
      x="0.75" y="0.5"
    />
    <rect
      height="43" rx="21.5"
      stroke="url(#paint2_linear_139_6458)" width="43"
      x="8.75" y="8.5"
    />
    <rect
      height="43" rx="21.5"
      stroke="url(#paint3_linear_139_6458)" width="43"
      x="8.75" y="8.5"
    />
    <path d="M30.25 25.5C29.0074 25.5 28 26.5074 28 27.75C28 28.9926 29.0074 30 30.25 30C31.4926 30 32.5 28.9926 32.5 27.75C32.5 26.5074 31.4926 25.5 30.25 25.5Z" fill="#A685FA" />
    <path
      clipRule="evenodd" d="M19.75 22.875C19.75 21.8395 20.5895 21 21.625 21H38.875C39.9105 21 40.75 21.8395 40.75 22.875V32.625C40.75 33.6605 39.9105 34.5 38.875 34.5H21.625C20.5895 34.5 19.75 33.6605 19.75 32.625V22.875ZM26.5 27.75C26.5 25.6789 28.1789 24 30.25 24C32.3211 24 34 25.6789 34 27.75C34 29.8211 32.3211 31.5 30.25 31.5C28.1789 31.5 26.5 29.8211 26.5 27.75ZM37 27C36.5858 27 36.25 27.3358 36.25 27.75V27.7575C36.25 28.1717 36.5858 28.5075 37 28.5075H37.0075C37.4217 28.5075 37.7575 28.1717 37.7575 27.7575V27.75C37.7575 27.3358 37.4217 27 37.0075 27H37ZM22.75 27.75C22.75 27.3358 23.0858 27 23.5 27H23.5075C23.9217 27 24.2575 27.3358 24.2575 27.75V27.7575C24.2575 28.1717 23.9217 28.5075 23.5075 28.5075H23.5C23.0858 28.5075 22.75 28.1717 22.75 27.7575V27.75Z"
      fill="#A685FA" fillRule="evenodd"
    />
    <path d="M20.5 36C20.0858 36 19.75 36.3358 19.75 36.75C19.75 37.1642 20.0858 37.5 20.5 37.5C25.9 37.5 31.1302 38.2222 36.0998 39.5749C37.2904 39.899 38.5 39.0168 38.5 37.7551V36.75C38.5 36.3358 38.1642 36 37.75 36H20.5Z" fill="#A685FA" />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse" id="paint0_linear_139_6458"
        x1="5.18903" x2="62.9939"
        y1="63.2927" y2="-4.02439"
      >
        <stop stopColor="#A685FA" />
        <stop
          offset="0.323723" stopColor="#A685FA"
          stopOpacity="0"
        />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse" id="paint1_linear_139_6458"
        x1="60.0671" x2="5.18902"
        y1="-7.68292" y2="60"
      >
        <stop stopColor="#A685FA" />
        <stop
          offset="0.576615" stopColor="#A685FA"
          stopOpacity="0"
        />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse" id="paint2_linear_139_6458"
        x1="3.45968" x2="52.0726"
        y1="10.4839" y2="52"
      >
        <stop stopColor="#A685FA" />
        <stop
          offset="0.323723" stopColor="#A685FA"
          stopOpacity="0"
        />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse" id="paint3_linear_139_6458"
        x1="60.9435" x2="9.84677"
        y1="61.9355" y2="25.7419"
      >
        <stop stopColor="#A685FA" />
        <stop
          offset="0.576615" stopColor="#A685FA"
          stopOpacity="0"
        />
      </linearGradient>
    </defs>
  </SvgIcon>
);
