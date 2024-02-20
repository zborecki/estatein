export interface PaginationComponentProps extends PaginationMetaModuleProps {
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export interface PaginationMetaModuleProps {
  page: {
    [page in 'current' | 'total']: number;
  }
}
