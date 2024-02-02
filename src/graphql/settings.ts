import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { ENV } from '#constants/env';

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: ENV.GRAPHQL_TOKEN
      ? `Bearer ${ENV.GRAPHQL_TOKEN}`
      : ''
  }
}));

const httpLink = createHttpLink({
  uri: ENV.GRAPHQL_URI
});

export const api = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});
