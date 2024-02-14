import { Paper, Typography } from '@mui/material';
import { FC } from 'react';
import CountUp from 'react-countup';

import { summaryCardStyles } from '#theme/styles/summaryCard.styles';
import { SummaryCardComponentProps } from '#types/props/summaryCard.types';

export const SummaryCardComponent: FC<SummaryCardComponentProps> = ({
  description,
  initialValue = 0,
  suffix,
  value
}) => (
  <Paper sx={summaryCardStyles.root}>
    <Typography
      component="h2"
      sx={summaryCardStyles.value}
      variant="h5"
    >
      <CountUp
        end={value}
        start={initialValue}
        suffix={suffix}
      />
    </Typography>
    <Typography sx={summaryCardStyles.description}>{ description }</Typography>
  </Paper>
);
