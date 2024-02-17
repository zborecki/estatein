import { SvgIcon, SvgIconProps } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { defineClassName } from '#utils/defineClassName';

export const LinkIcon: FC<SvgIconProps> = ({ className, ...rest }) => (
  <SvgIcon
    className={clsx(defineClassName('link-icon'), className)}
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M4.5 19.5L19.5 4.5M19.5 4.5L8.25 4.5M19.5 4.5V15.75" stroke="white"
      strokeLinecap="round" strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </SvgIcon>
);
