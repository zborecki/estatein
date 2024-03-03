import { SocialSkeleton } from '#components/skeletons/SocialSkeleton';
import { generateKey } from '#utils/generateKey';
import { skeletons } from '#utils/skeletons';

export const SocialsSkeleton = () => skeletons(3).map(
  () => <SocialSkeleton key={generateKey()} />
);
