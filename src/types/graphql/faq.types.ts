import { PaginationResponse } from '#types/graphql/pagination.types';
import { FAQ } from '#types/modules.types';

export interface FAQPaginationResponse {
  faqsConnection: PaginationResponse<FAQ>;
}
