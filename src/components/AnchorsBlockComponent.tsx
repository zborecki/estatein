import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { anchorsBlockStyles } from '#theme/styles/anchorsBlock.styles';
import { AnchorsBlockComponentProps } from '#types/props/anchorsBlock.types';
import { generateKey } from '#utils/generateKey';

export const AnchorsBlockComponent: FC<AnchorsBlockComponentProps> = ({
  anchors, heading
}) => (
  <Box>
    <Typography
      sx={anchorsBlockStyles.heading}
      variant="anchor1"
    >
      { heading }
    </Typography>
    <Stack component="ul" sx={anchorsBlockStyles.list}>
      {
        anchors.map(({ label, to }) => (
          <Box component="li" key={generateKey()}>
            <Typography
              component={Link}
              sx={anchorsBlockStyles.listItem}
              to={to}
              variant="anchor2"
            >
              { label }
            </Typography>
          </Box>
        ))
      }
    </Stack>
  </Box>
);
