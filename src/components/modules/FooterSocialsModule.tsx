import { Stack } from '@mui/material';

import { SocialComponent } from '#components/SocialComponent';
import { SocialsSkeleton } from '#components/skeletons/SocialsSkeleton';
import { useAppSelector } from '#hooks/useAppSelector';
import { generateKey } from '#utils/generateKey';

export const FooterSocialsModule = () => {
  const { data, status } = useAppSelector().socials;

  return (
    <Stack direction="row" gap={1}>
      {
        status === 'success'
          ? data.map(({ type, url }) => (
            <SocialComponent
              key={generateKey()}
              type={ type}
              url={url}
            />
          )) : <SocialsSkeleton />
      }
    </Stack>
  );
};
