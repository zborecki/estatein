import { TESTIMONIALS_PAGINATION_QUERY } from '#graphql/queries/testimonials.query';
import { api } from '#graphql/settings.graphql';
import { PaginationSettings } from '#types/graphql/pagination.types';
import { TestimonialsPaginationResponse } from '#types/graphql/testimonials.types';

export const getTestimonialsPagination = async ({
  offset = 3,
  skip = 0
}: PaginationSettings) => (
  api.query<TestimonialsPaginationResponse, PaginationSettings>({
    query: TESTIMONIALS_PAGINATION_QUERY,
    variables: {
      offset,
      skip
    }
  })
);
