import { useQuery } from '@apollo/client';

import { PaginationSettings } from '#types/graphql/pagination.types';
import { UsePaginationProps } from '#types/props/UsePaginationProps';

export const usePagination = <T extends object>({
  offset = 3,
  query,
  skip = 0
}: UsePaginationProps) => {
  const {
    data, error, fetchMore, loading
  } = useQuery<T, PaginationSettings>(query, {
    variables: {
      offset,
      skip
    }
  });

  return {
    data,
    error,
    fetchMore,
    isLoading: loading
  };
};
