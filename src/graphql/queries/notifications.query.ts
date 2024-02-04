import { gql } from '@apollo/client';

export const NOTIFICATIONS_QUERY = gql`
  query Notifications {
    notifications {
      button {
        label
        to
      }
      id
      message
    }
  }
`;
