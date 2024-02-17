import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

import { mergeStyles } from '#utils/mergeStyles';

export const SunIcon: FC<SvgIconProps> = ({ sx, ...rest }) => (
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
      stroke="url(#paint0_linear_139_6474)" width="59"
      x="0.75" y="0.5"
    />
    <rect
      height="59" rx="29.5"
      stroke="url(#paint1_linear_139_6474)" width="59"
      x="0.75" y="0.5"
    />
    <rect
      height="43" rx="21.5"
      stroke="url(#paint2_linear_139_6474)" width="43"
      x="8.75" y="8.5"
    />
    <rect
      height="43" rx="21.5"
      stroke="url(#paint3_linear_139_6474)" width="43"
      x="8.75" y="8.5"
    />
    <path d="M30.25 20.25C30.6642 20.25 31 20.5858 31 21V23.25C31 23.6642 30.6642 24 30.25 24C29.8358 24 29.5 23.6642 29.5 23.25V21C29.5 20.5858 29.8358 20.25 30.25 20.25Z" fill="#A685FA" />
    <path d="M25.75 30C25.75 27.5147 27.7647 25.5 30.25 25.5C32.7353 25.5 34.75 27.5147 34.75 30C34.75 32.4853 32.7353 34.5 30.25 34.5C27.7647 34.5 25.75 32.4853 25.75 30Z" fill="#A685FA" />
    <path d="M37.1443 24.1663C37.4372 23.8734 37.4372 23.3986 37.1443 23.1057C36.8514 22.8128 36.3766 22.8128 36.0837 23.1057L34.4927 24.6967C34.1998 24.9896 34.1998 25.4644 34.4927 25.7573C34.7856 26.0502 35.2605 26.0502 35.5534 25.7573L37.1443 24.1663Z" fill="#A685FA" />
    <path d="M40 30C40 30.4142 39.6642 30.75 39.25 30.75H37C36.5858 30.75 36.25 30.4142 36.25 30C36.25 29.5858 36.5858 29.25 37 29.25H39.25C39.6642 29.25 40 29.5858 40 30Z" fill="#A685FA" />
    <path d="M36.0836 36.8943C36.3765 37.1871 36.8513 37.1871 37.1442 36.8943C37.4371 36.6014 37.4371 36.1265 37.1442 35.8336L35.5532 34.2426C35.2603 33.9497 34.7855 33.9497 34.4926 34.2426C34.1997 34.5355 34.1997 35.0104 34.4926 35.3033L36.0836 36.8943Z" fill="#A685FA" />
    <path d="M30.25 36C30.6642 36 31 36.3358 31 36.75V39C31 39.4142 30.6642 39.75 30.25 39.75C29.8358 39.75 29.5 39.4142 29.5 39V36.75C29.5 36.3358 29.8358 36 30.25 36Z" fill="#A685FA" />
    <path d="M26.0075 35.3033C26.3004 35.0104 26.3004 34.5355 26.0075 34.2426C25.7146 33.9497 25.2397 33.9497 24.9468 34.2426L23.3559 35.8336C23.063 36.1265 23.063 36.6014 23.3559 36.8943C23.6487 37.1872 24.1236 37.1872 24.4165 36.8943L26.0075 35.3033Z" fill="#A685FA" />
    <path d="M24.25 30C24.25 30.4142 23.9142 30.75 23.5 30.75H21.25C20.8358 30.75 20.5 30.4142 20.5 30C20.5 29.5858 20.8358 29.25 21.25 29.25H23.5C23.9142 29.25 24.25 29.5858 24.25 30Z" fill="#A685FA" />
    <path d="M24.9467 25.7573C25.2396 26.0502 25.7145 26.0502 26.0074 25.7573C26.3003 25.4644 26.3003 24.9896 26.0074 24.6967L24.4164 23.1057C24.1235 22.8128 23.6486 22.8128 23.3557 23.1057C23.0628 23.3986 23.0628 23.8734 23.3557 24.1663L24.9467 25.7573Z" fill="#A685FA" />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse" id="paint0_linear_139_6474"
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
        gradientUnits="userSpaceOnUse" id="paint1_linear_139_6474"
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
        gradientUnits="userSpaceOnUse" id="paint2_linear_139_6474"
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
        gradientUnits="userSpaceOnUse" id="paint3_linear_139_6474"
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
