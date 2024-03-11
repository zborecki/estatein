import { PaginationMetaResponse } from '#types/graphql/pagination.types';
import { FAQ } from '#types/modules.types';
import { PaginationSettings, ThunkState } from '#types/redux/common.types';

export interface FAQState
  extends PaginationMetaResponse, PaginationSettings, ThunkState {
  data: FAQ[];
}
