import { AdComponent } from '#components/AdComponent';
import { useExplorePropertiesAd } from '#hooks/useExplorePropertiesAd';

export const ExplorePropertiesAdSection = () => {
  const { explorePropertiesAd } = useExplorePropertiesAd();

  return <AdComponent {...explorePropertiesAd} />;
};
