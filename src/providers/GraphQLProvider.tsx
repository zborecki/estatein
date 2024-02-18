import { ApolloProvider } from '@apollo/client';
import { FC, PropsWithChildren } from 'react';

import { api } from '#graphql/settings.graphql';

export const GraphQLProvider: FC<PropsWithChildren> = ({
  children
}) => (
  <ApolloProvider client={api}>
    { children }
  </ApolloProvider>
);
