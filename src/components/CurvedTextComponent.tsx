import { useTheme } from '@mui/material';
import { FC } from 'react';
import ReactCurvedText from 'react-curved-text';

import { ChildrenProps } from '#types/props/common.types';

enum PARAMETER {
  CENTER = 70,
  RADIUS = 30,
  SIZE = 140
}

export const CurvedTextComponent: FC<ChildrenProps> = ({ children }) => {
  const { palette: { text }, typography } = useTheme();

  return (
    <ReactCurvedText
      cx={PARAMETER.CENTER}
      cy={PARAMETER.CENTER}
      height={PARAMETER.SIZE}
      rx={PARAMETER.RADIUS}
      ry={PARAMETER.RADIUS}
      text={children}
      textProps={{
        style: {
          ...typography.curvedText,
          fill: text.primary
        }
      }}
      tspanProps={{ dy: '26' }}
      width={PARAMETER.SIZE}
    />
  );
};
