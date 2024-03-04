import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTE } from '#router/paths.router';
import { Ad } from '#types/props/ad.types';

export const useExplorePropertiesAd = () => {
  const { t } = useTranslation('');

  const explorePropertiesAd = useMemo<Ad>(() => ({
    button: {
      label: t('label.explore_properties'),
      to: ROUTE.HOME
    },
    description: t('explore_properties_ad_section.description'),
    title: t('explore_properties_ad_section.title')
  }), [t]);

  return {
    explorePropertiesAd
  };
};
