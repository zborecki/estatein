import { gql } from '@apollo/client';

import { BASE_PAGINATION_META, CUSTOMER } from '#graphql/common.constants';

const TESTIMONIALS_PAGINATION_BODY = `
  opinion
  rating
  representative {
    ${CUSTOMER}
  }
  title
`;

export const TESTIMONIALS_PAGINATION_QUERY = gql`
  query TestimonialsPagination($offset: Int!, $skip: Int!) {
    testimonialsConnection(first: $offset, skip: $skip) {
      edges {
        node {
          ${TESTIMONIALS_PAGINATION_BODY}
        }
      }
      ${BASE_PAGINATION_META}
    }
  }
`;
