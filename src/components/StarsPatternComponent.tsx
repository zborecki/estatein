import { FC, useMemo } from 'react';

import { StarsPattern } from '#assets/patterns/StarsPattern';
import { starsPatternStyles } from '#theme/styles/starsPattern.styles';
import { BaseProps } from '#types/props/common.types';
import { mergeStyles } from '#utils/mergeStyles';

export const StarsPatternComponent: FC<BaseProps> = ({ sx }) => {
  const memoizedStyles = useMemo(() => mergeStyles(starsPatternStyles.root, sx), [sx]);

  return (
    <StarsPattern sx={memoizedStyles} />
  );
};
