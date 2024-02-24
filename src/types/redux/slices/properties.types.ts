import { PaginationMetaResponse } from '#types/graphql/pagination.types';
import { Property } from '#types/modules.types';
import { ThunkState } from '#types/redux/common.types';

export interface PropertiesPaginationSettings {
  offset: number;
  skip: number;
}

export interface PropertiesState
  extends PaginationMetaResponse, PropertiesPaginationSettings, ThunkState {
  data: Property[];
}
