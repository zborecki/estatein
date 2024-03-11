import { PaginationResponse } from '#types/graphql/pagination.types';
import { Testimonial } from '#types/modules.types';

export interface TestimonialsPaginationResponse {
  testimonialsConnection: PaginationResponse<Testimonial>;
}
