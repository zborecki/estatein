import { PaginationMetaResponse } from '#types/graphql/pagination.types';
import { Property } from '#types/modules.types';
import { PaginationSettings, ThunkState } from '#types/redux/common.types';

export interface PropertiesState
  extends PaginationMetaResponse, PaginationSettings, ThunkState {
  data: Property[];
}
