import { gql } from '@apollo/client';

import { BASE_PAGINATION_META } from '#graphql/common.constants';

const PROPERTIES_PAGINATION_BODY = `
  currency
  description
  images(first: 1) {
    alt
    url
    id
  }
  location {
    latitude
    longitude
  }
  price
  slug
  title
`;

export const PROPERTIES_PAGINATION_QUERY = gql`
  query PropertiesPagination($offset: Int!, $skip: Int!) {
    propertiesConnection(first: $offset, skip: $skip) {
      edges {
        node {
          ${PROPERTIES_PAGINATION_BODY}
        }
      }
      ${BASE_PAGINATION_META}
    }
  }
`;
