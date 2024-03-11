import { FAQ_PAGINATION_QUERY } from '#graphql/queries/faq.query';
import { api } from '#graphql/settings.graphql';
import { FAQPaginationResponse } from '#types/graphql/faq.types';
import { PaginationSettings } from '#types/graphql/pagination.types';

export const getFAQPagination = async ({
  offset = 3,
  skip = 0
}: PaginationSettings) => (
  api.query<FAQPaginationResponse, PaginationSettings>({
    query: FAQ_PAGINATION_QUERY,
    variables: {
      offset,
      skip
    }
  })
);
