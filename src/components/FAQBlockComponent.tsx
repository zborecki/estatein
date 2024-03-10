import { Button, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { faqBlockStyles } from '#theme/styles/faqBlock.styles';
import { FAQ } from '#types/modules.types';

export const FAQBlockComponent: FC<FAQ> = ({
  answer, question
}) => {
  const { t } = useTranslation('');

  return (
    <Paper sx={faqBlockStyles.root}>
      <Typography
        component="h2"
        sx={faqBlockStyles.question}
        variant="h6"
      >
        { question }
      </Typography>
      <Typography sx={faqBlockStyles.answer}>{ answer }</Typography>
      <Button sx={faqBlockStyles.button} variant="outlined">
        { t('label.read_more') }
      </Button>
    </Paper>
  );
};
