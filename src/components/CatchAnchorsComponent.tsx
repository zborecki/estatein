import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const removeHash = (path: string) => path.slice(1);

export const CatchAnchorsComponent = () => {
  const { hash } = useLocation();

  const component = useMemo(() => (
    hash
      ? document.getElementById(removeHash(hash))
      : null
  ), [hash]);

  useEffect(() => {
    if (component) {
      component.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest'
      });
    }
  }, [component]);

  return null;
};
