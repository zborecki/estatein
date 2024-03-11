import { PaginationMetaResponse, PaginationResponse } from '#types/graphql/pagination.types';
import { Testimonial } from '#types/modules.types';

interface ExpectedProps extends PaginationMetaResponse {
  data: Testimonial[];
}

export const convertTestimonials = ({
  aggregate, edges, pageInfo
}: PaginationResponse<Testimonial>) => ({
  aggregate,
  data: edges.map(({ node }) => ({ ...node })),
  pageInfo
} as ExpectedProps);
