import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'react.native.final',
  appName: 'task-client',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
