import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

export const YouTubeIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon
    fill="none"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.1669 8.09165C19.2081 6.89886 18.9472 5.715 18.4085 4.64999C18.043 4.21299 17.5358 3.91808 16.9752 3.81665C14.6565 3.60626 12.3281 3.52002 10.0002 3.55832C7.68072 3.51829 5.36078 3.60174 3.05019 3.80832C2.59337 3.89142 2.17062 4.10569 1.83352 4.42499C1.08352 5.11665 1.00019 6.29999 0.916852 7.29999C0.795945 9.09796 0.795945 10.902 0.916852 12.7C0.94096 13.2628 1.02476 13.8215 1.16685 14.3667C1.26733 14.7875 1.47062 15.1769 1.75852 15.5C2.09791 15.8362 2.53051 16.0627 3.00019 16.15C4.79678 16.3718 6.60703 16.4637 8.41685 16.425C11.3335 16.4667 13.8919 16.425 16.9169 16.1917C17.3981 16.1097 17.8428 15.8829 18.1919 15.5417C18.4252 15.3082 18.5994 15.0226 18.7002 14.7083C18.9982 13.7938 19.1446 12.8367 19.1335 11.875C19.1669 11.4083 19.1669 8.59165 19.1669 8.09165ZM8.11685 12.375V7.21665L13.0502 9.80832C11.6669 10.575 9.84185 11.4417 8.11685 12.375Z" fill="black" />
  </SvgIcon>
);