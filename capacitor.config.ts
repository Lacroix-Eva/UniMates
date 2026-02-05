import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ccc.unimates',
  appName: 'UniMates',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
