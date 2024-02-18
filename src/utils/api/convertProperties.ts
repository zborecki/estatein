import { PaginationMetaResponse, PaginationResponse } from '#types/graphql/pagination.types';
import { Property } from '#types/modules.types';

interface ExpectedProps extends PaginationMetaResponse {
  data: Property[];
}

export const convertProperties = ({
  aggregate, edges, pageInfo
}: PaginationResponse<Property>) => ({
  aggregate,
  data: edges.map(({ node }) => ({ ...node })),
  pageInfo
} as ExpectedProps);
