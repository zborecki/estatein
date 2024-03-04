import { Box, Container } from '@mui/material';
import { FC, useMemo } from 'react';

import { ButtonLinkComponent } from '#components/ButtonLinkComponent';
import { SectionHeaderComponent } from '#components/SectionHeaderComponent';
import { AdPatternModule } from '#components/modules/AdPatternModule';
import { adStyles } from '#theme/styles/ad.styles';
import { AdComponentProps } from '#types/props/ad.types';
import { mergeStyles } from '#utils/mergeStyles';

export const AdComponent: FC<AdComponentProps> = ({
  button, description, title
}) => {
  const containerStyles = useMemo(() => mergeStyles(
    adStyles.container,
    button && adStyles.optionalButton
  ), [button]);

  return (
    <Box sx={adStyles.root}>
      <AdPatternModule />
      <Container sx={containerStyles}>
        <SectionHeaderComponent
          description={description}
          title={title}
          disableMarginBottom
          disablePattern
        />
        {
          button && (
            <ButtonLinkComponent
              isExternalLink={button.isExternalLink}
              to={button.to}
            >
              { button.label }
            </ButtonLinkComponent>
          )
        }
      </Container>
    </Box>
  );
};
