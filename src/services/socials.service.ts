import { SOCIALS_QUERY } from '#graphql/queries/socials.query';
import { api } from '#graphql/settings.graphql';
import { SocialsResponse } from '#types/graphql/socials.types';

export const getSocials = async () => api.query<SocialsResponse>({
  query: SOCIALS_QUERY
});
