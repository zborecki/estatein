import { SxProps } from '@mui/material';

interface Props {
  lineClamp?: number;
}

export const defineEllipsis = ({
  lineClamp = 2
}: Props): SxProps => ({
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: lineClamp
});
