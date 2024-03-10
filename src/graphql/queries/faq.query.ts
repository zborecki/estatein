import { gql } from '@apollo/client';

import { BASE_PAGINATION_META } from '#graphql/common.constants';

export const FAQ_PAGINATION_QUERY = gql`
  query FAQPagination($offset: Int!, $skip: Int!) {
    faqsConnection(first: $offset, skip: $skip) {
      edges {
        node {
          answer
          question
        }
      }
      ${BASE_PAGINATION_META}
    }
  }
`;
