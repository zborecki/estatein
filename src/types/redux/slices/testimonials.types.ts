import { PaginationMetaResponse } from '#types/graphql/pagination.types';
import { Testimonial } from '#types/modules.types';
import { PaginationSettings, ThunkState } from '#types/redux/common.types';

export interface TestimonialsState
  extends PaginationMetaResponse, PaginationSettings, ThunkState {
  data: Testimonial[];
}
