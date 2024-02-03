/* eslint-disable import/no-extraneous-dependencies */

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.norbertzborecki.estatein',
  appName: 'Estatein',
  server: {
    cleartext: true,
    url: 'http://localhost:8100'
  },
  webDir: 'dist'
};

export default config;
