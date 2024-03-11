/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '#assets': path.resolve(__dirname, './src/assets'),
      '#components': path.resolve(__dirname, './src/components'),
      '#constants': path.resolve(__dirname, './src/constants'),
      '#forms': path.resolve(__dirname, './src/forms'),
      '#graphql': path.resolve(__dirname, './src/graphql'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
      '#i18n': path.resolve(__dirname, './src/i18n'),
      '#layouts': path.resolve(__dirname, './src/layouts'),
      '#mockups': path.resolve(__dirname, './src/mockups'),
      '#providers': path.resolve(__dirname, './src/providers'),
      '#redux': path.resolve(__dirname, './src/redux'),
      '#router': path.resolve(__dirname, './src/router'),
      '#services': path.resolve(__dirname, './src/services'),
      '#theme': path.resolve(__dirname, './src/theme'),
      '#types': path.resolve(__dirname, './src/types'),
      '#utils': path.resolve(__dirname, './src/utils'),
      '#views': path.resolve(__dirname, './src/views'),
      '#': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8100
  }
});
