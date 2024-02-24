import { gql } from '@apollo/client';

import { LINK_COMPONENT_BODY } from '#graphql/components/link.component';

export const NOTIFICATIONS_QUERY = gql`
  query Notifications {
    notifications {
      button {
        ${LINK_COMPONENT_BODY}
      }
      id
      message
    }
  }
`;
