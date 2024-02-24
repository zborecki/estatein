import { PROPERTIES_PAGINATION_QUERY } from '#graphql/queries/properties.query';
import { api } from '#graphql/settings.graphql';
import { PaginationSettings } from '#types/graphql/pagination.types';
import { PropertiesPaginationResponse } from '#types/graphql/properties.types';

export const getPropertiesPagination = async ({
  offset = 3,
  skip = 0
}: PaginationSettings) => (
  api.query<PropertiesPaginationResponse, PaginationSettings>({
    query: PROPERTIES_PAGINATION_QUERY,
    variables: {
      offset,
      skip
    }
  })
);
