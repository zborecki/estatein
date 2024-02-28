import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ANCHOR } from '#constants/anchors.constants';
import { AnchorsBlockComponentProps } from '#types/props/anchorsBlock.types';

export const useHomeAnchors = () => {
  const { t } = useTranslation('');

  const { anchors, heading } = useMemo<AnchorsBlockComponentProps>(() => ({
    heading: t('label.home'),
    anchors: [
      {
        label: t('label.hero'),
        to: `/#${ANCHOR.HERO}`
      },
      {
        label: t('label.features'),
        to: `/#${ANCHOR.FEATURES}`
      },
      {
        label: t('label.featured_properties'),
        to: `/#${ANCHOR.FEATURED_PROPERTIES}`
      }
    ]
  }), []);

  return {
    anchors,
    heading
  };
};
