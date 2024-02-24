import { RouterProvider } from 'react-router-dom';

import { GraphQLProvider } from '#providers/GraphQLProvider';
import { I18nProvider } from '#providers/I18nProvider';
import { ReduxProvider } from '#providers/ReduxProvider';
import { UIProvider } from '#providers/UIProvider';
import { router } from '#router/settings.router';

export const App = () => (
  <GraphQLProvider>
    <ReduxProvider>
      <UIProvider>
        <I18nProvider>
          <RouterProvider router={router} />
        </I18nProvider>
      </UIProvider>
    </ReduxProvider>
  </GraphQLProvider>
);
