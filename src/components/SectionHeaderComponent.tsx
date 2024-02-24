import { Box } from '@mui/material';
import { FC, useMemo } from 'react';

import { StarsPatternComponent } from '#components/StarsPatternComponent';
import { SectionHeaderContentModule } from '#components/modules/SectionHeaderContentModule';
import { sectionHeaderStyles } from '#theme/styles/sectionHeader.styles';
import { SectionHeaderComponentProps } from '#types/props/sectionHeader.types';
import { mergeStyles } from '#utils/mergeStyles';

export const SectionHeaderComponent: FC<SectionHeaderComponentProps> = ({
  children,
  description,
  disableMarginBottom,
  disablePattern,
  sx,
  title
}) => {
  const memoizedRootStyles = useMemo(() => (
    mergeStyles(
      !disableMarginBottom && sectionHeaderStyles.margin,
      sx
    )
  ), [disableMarginBottom, sx]);

  return (
    <Box component="header" sx={memoizedRootStyles}>
      { !disablePattern && <StarsPatternComponent sx={sectionHeaderStyles.pattern} /> }
      <SectionHeaderContentModule
        description={description}
        title={title}
      >
        { children }
      </SectionHeaderContentModule>
    </Box>
  );
};
