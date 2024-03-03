import { SocialType } from '#types/atoms.types';
import { Social } from '#types/modules.types';

interface ExpectedProps {
  data: Social[];
}

export const convertSocials = ({ data }: ExpectedProps) => data.map(
  ({ type, url }) => ({
    type: type.toLowerCase() as SocialType,
    url
  } as Social)
);
