import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

import { mergeStyles } from '#/utils/mergeStyles';

export const HomeIcon: FC<SvgIconProps> = ({ sx, ...rest }) => (
  <SvgIcon
    height="60"
    sx={mergeStyles({ fill: 'none' }, sx)}
    viewBox="0 0 61 60"
    width="61"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect
      height="59" rx="29.5"
      stroke="url(#paint0_linear_139_6450)" width="59"
      x="1.25" y="0.5"
    />
    <rect
      height="59" rx="29.5"
      stroke="url(#paint1_linear_139_6450)" width="59"
      x="1.25" y="0.5"
    />
    <rect
      height="43" rx="21.5"
      stroke="url(#paint2_linear_139_6450)" width="43"
      x="9.25" y="8.5"
    />
    <rect
      height="43" rx="21.5"
      stroke="url(#paint3_linear_139_6450)" width="43"
      x="9.25" y="8.5"
    />
    <path d="M22.2043 26.5453C23.6102 27.9512 25.8896 27.9512 27.2955 26.5453C27.4682 26.3725 27.6198 26.1866 27.7501 25.9907C28.3951 26.9606 29.4978 27.5998 30.7499 27.5998C32.0021 27.5998 33.105 26.9604 33.75 25.9903C33.8804 26.1864 34.032 26.3725 34.2049 26.5453C35.6107 27.9512 37.8901 27.9512 39.296 26.5453C40.7019 25.1395 40.7019 22.8601 39.296 21.4542L38.9448 21.103C38.4947 20.6529 37.8843 20.4 37.2478 20.4H24.2525C23.616 20.4 23.0056 20.6529 22.5555 21.103L22.2043 21.4541C20.7984 22.86 20.7984 25.1394 22.2043 26.5453Z" fill="#A685FA" />
    <path d="M22.3499 28.8387C24.0635 29.6888 26.1346 29.5728 27.7506 28.4905C28.6079 29.0641 29.6396 29.3997 30.7499 29.3997C31.8603 29.3997 32.8921 29.064 33.7495 28.4903C35.3653 29.5727 37.4363 29.6889 39.1499 28.839V37.8H39.4499C39.947 37.8 40.3499 38.203 40.3499 38.7C40.3499 39.1971 39.947 39.6 39.4499 39.6H34.0499C33.5528 39.6 33.1499 39.1971 33.1499 38.7V34.5C33.1499 34.003 32.747 33.6 32.2499 33.6H29.2499C28.7528 33.6 28.3499 34.003 28.3499 34.5V38.7C28.3499 39.1971 27.947 39.6 27.4499 39.6H22.0499C21.5528 39.6 21.1499 39.1971 21.1499 38.7C21.1499 38.203 21.5528 37.8 22.0499 37.8H22.3499V28.8387Z" fill="#A685FA" />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse" id="paint0_linear_139_6450"
        x1="5.68903" x2="63.4939"
        y1="63.2927" y2="-4.02439"
      >
        <stop stopColor="#A685FA" />
        <stop
          offset="0.323723" stopColor="#A685FA"
          stopOpacity="0"
        />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse" id="paint1_linear_139_6450"
        x1="60.5671" x2="5.68902"
        y1="-7.68292" y2="60"
      >
        <stop stopColor="#A685FA" />
        <stop
          offset="0.576615" stopColor="#A685FA"
          stopOpacity="0"
        />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse" id="paint2_linear_139_6450"
        x1="3.95968" x2="52.5726"
        y1="10.4839" y2="52"
      >
        <stop stopColor="#A685FA" />
        <stop
          offset="0.323723" stopColor="#A685FA"
          stopOpacity="0"
        />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse" id="paint3_linear_139_6450"
        x1="61.4435" x2="10.3468"
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
