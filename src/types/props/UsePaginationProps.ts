import { DocumentNode } from 'graphql';

import { PaginationSettings } from '#types/graphql/pagination.types';

export interface UsePaginationProps extends PaginationSettings {
  query: DocumentNode;
}
