export interface PaginationComponentProps extends PaginationMetaModuleProps {
  disablePreviousButton?: boolean;
  disableNextButton?: boolean;
  isLoading?: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export interface PaginationMetaModuleProps {
  page: {
    [page in 'current' | 'total']: number;
  }
}
