import { Box } from '@mui/material';

import { summaryCards } from '#/mockups/summaryCards.mockup';
import { generateKey } from '#/utils/generateKey';
import { SummaryCardComponent } from '#components/SummaryCardComponent';
import { summaryCardsStyles } from '#theme/styles/summaryCards.styles';

export const SummaryCardsComponent = () => (
  <Box sx={summaryCardsStyles.root}>
    {
      summaryCards.map((props) => (
        <SummaryCardComponent
          {...props}
          key={generateKey()}
        />
      ))
    }
  </Box>
);
