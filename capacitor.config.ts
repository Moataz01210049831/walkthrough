import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: 'f31b9a70',
      channel: 'production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
