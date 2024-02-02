import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { theme } from '#theme/settings';
import 'normalize.css';

export const UIProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    { children }
  </ThemeProvider>
);
