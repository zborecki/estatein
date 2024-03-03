import { gql } from '@apollo/client';

import { LINK_COMPONENT_BODY } from '#graphql/components/link.component';

export const NAVIGATION_QUERY = gql`
  query Navigation($category: String!) {
    navigations(where:{category: $category}) {
      category
      link {
        ${LINK_COMPONENT_BODY}
      }
    }
  }
`;
