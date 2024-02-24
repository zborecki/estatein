import { Paper } from '@mui/material';
import { FC, useMemo } from 'react';

import { darkPaperStyles } from '#theme/styles/darkPaper.styles';
import { DarkPaperComponentProps } from '#types/props/darkPaper.types';
import { mergeStyles } from '#utils/mergeStyles';

export const DarkPaperComponent: FC<DarkPaperComponentProps> = ({
  children, sx
}) => {
  const memoizedSxProps = useMemo(() => mergeStyles(darkPaperStyles.root, sx), [sx]);

  return (
    <Paper sx={memoizedSxProps}>
      { children }
    </Paper>
  );
};
