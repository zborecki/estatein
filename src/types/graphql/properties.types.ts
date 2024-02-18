import { PaginationResponse } from '#types/graphql/pagination.types';
import { Property } from '#types/modules.types';

export interface PropertiesPaginationResponse {
  propertiesConnection: PaginationResponse<Property>;
}
