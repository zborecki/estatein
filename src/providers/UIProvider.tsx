import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { theme } from '#theme/settings.theme';
import 'normalize.css';
import '#theme/styles/global.styles.scss';

export const UIProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    { children }
  </ThemeProvider>
);
