import { useHomeAnchors } from '#/hooks/useHomeAnchors';
import { AnchorsBlockComponent } from '#components/AnchorsBlockComponent';

export const FooterAnchorsModule = () => {
  const home = useHomeAnchors();

  return (
    <AnchorsBlockComponent {...home} />
  );
};
