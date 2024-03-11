import { PaginationMetaResponse, PaginationResponse } from '#types/graphql/pagination.types';
import { FAQ } from '#types/modules.types';

interface ExpectedProps extends PaginationMetaResponse {
  data: FAQ[];
}

export const convertQuestions = ({
  aggregate, edges, pageInfo
}: PaginationResponse<FAQ>) => ({
  aggregate,
  data: edges.map(({ node }) => ({ ...node })),
  pageInfo
} as ExpectedProps);
