import { gql } from '@apollo/client';

export const SOCIALS_QUERY = gql`
  query Socials {
    socials {
      id
      type
      url
    }
  }
`;
