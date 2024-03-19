export default {
  expo: {
    name: 'trendd-app',
    slug: 'trendd-app',
    version: '1.0.0',
    scheme: 'trendd-app',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSUserTrackingUsageDescription:
          'This identifier will be used to deliver personalized ads to you.',
        SKAdNetworkItems: [
          {
            SKAdNetworkIdentifier: 'v9wttpbfk9.skadnetwork',
          },
          {
            SKAdNetworkIdentifier: 'n38lu8286q.skadnetwork',
          },
        ],
      },
      bundleIdentifier: 'com.trendd.trenddapp',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
      permissions: ['android.permission.INTERNET'],
      package: 'com.trendd.trenddapp',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      [
        'react-native-fbsdk-next',
        {
          appID: '1386162638604035',
          clientToken: 'c34158a08a25a1a6eef8c01dc07ade21',
          displayName: 'Trendd-App',
          scheme: 'fb1386162638604035',
          advertiserIDCollectionEnabled: false,
          autoLogAppEventsEnabled: false,
          isAutoInitEnabled: true,
          iosUserTrackingPermission:
            'This identifier will be used to deliver personalized ads to you.',
        },
      ],
      'expo-router',
    ],
    extra: {
      eas: {
        projectId: '36545cc1-6222-4819-9866-6675768eff98',
      },
    },
  },
};
