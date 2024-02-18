import { convertProperties } from '#/utils/api/convertProperties';
import { PROPERTIES_PAGINATION_QUERY } from '#graphql/queries/properties.query';
import { usePagination } from '#hooks/usePagination';
import { PropertiesPaginationResponse } from '#types/graphql/properties.types';

export const useProperties = () => {
  const {
    data, error, fetchMore, isLoading
  } = usePagination<PropertiesPaginationResponse>({
    offset: 3,
    query: PROPERTIES_PAGINATION_QUERY,
    skip: 0
  });

  return {
    fetchMoreProperties: fetchMore,
    isPropertiesLoading: isLoading,
    properties: data?.propertiesConnection && convertProperties(data?.propertiesConnection),
    propertiesError: error
  };
};
