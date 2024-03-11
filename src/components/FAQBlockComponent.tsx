import {
  Button, Paper, SxProps, Theme, Typography
} from '@mui/material';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ModalComponent } from '#components/ModalComponent';
import { useModal } from '#hooks/useModal';
import { faqBlockStyles } from '#theme/styles/faqBlock.styles';
import { FAQ } from '#types/modules.types';
import { defineEllipsis } from '#utils/defineEllipsis';
import { mergeStyles } from '#utils/mergeStyles';

export const FAQBlockComponent: FC<FAQ> = ({
  answer, question
}) => {
  const { t } = useTranslation('');
  const { closeModal, isModalActivated, openModal } = useModal();

  const content = useCallback((additionalSxProps?: SxProps<Theme>) => (
    <Typography sx={mergeStyles(faqBlockStyles.answer, additionalSxProps)}>
      { answer }
    </Typography>
  ), [answer]);

  return (
    <>
      <ModalComponent
        isOpen={isModalActivated}
        title={question}
        onClose={closeModal}
      >
        { content() }
      </ModalComponent>
      <Paper sx={faqBlockStyles.root}>
        <Typography
          component="h2"
          sx={faqBlockStyles.question}
          variant="h6"
        >
          { question }
        </Typography>
        { content({ ...defineEllipsis({ lineClamp: 2 }) }) }
        <Button
          sx={faqBlockStyles.button}
          variant="outlined"
          onClick={openModal}
        >
          { t('label.read_more') }
        </Button>
      </Paper>
    </>
  );
};
