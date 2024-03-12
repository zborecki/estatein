export const BASE_PAGINATION_META = `
  aggregate {
    count
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
    pageSize
  }
`;

export const CUSTOMER = `
  avatar {
    url
  }
  companyName
  fullName
`;
