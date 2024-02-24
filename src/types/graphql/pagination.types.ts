export interface PaginationMetaResponse {
  aggregate: {
    count: number;
  };
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageSize: number;
  };
}

export interface PaginationResponse<T> extends PaginationMetaResponse {
  edges: {
    node: T;
  }[];
}

export interface PaginationSettings {
  offset?: number;
  skip?: number;
}
