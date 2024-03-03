import { NAVIGATION_QUERY } from '#graphql/queries/navigation.query';
import { api } from '#graphql/settings.graphql';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNavigation = async () => api.query<any, { category: string }>({
  query: NAVIGATION_QUERY,
  variables: {
    category: 'Footer'
  }
});
