import Constants from "expo-constants";

const ENV = {
  dev: {
    apiUrl: "localhost:3333",
    amplitudeApiKey: null
  },
  staging: {
    apiUrl: "[your.staging.api.here]",
    amplitudeApiKey: "[Enter your key here]"
    // Add other keys you want here
  },
  sandbox: {
    apiUrl: "[your.sandbox.api.here]",
    amplitudeApiKey: "[Enter your key here]"
    // Add other keys you want here
  },
  production: {
    apiUrl: "[your.production.api.here]",
    amplitudeApiKey: "[Enter your key here]"
    // Add other keys you want here
  }
};

// https://docs.expo.io/versions/latest/distribution/release-channels/#using-release-channels-for-environment-variable-configuration
export const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  }
  if (env.includes("staging")) {
    return ENV.staging;
  }
  if (env.includes("sandbox")) {
    return ENV.sandbox;
  }
  if (env.includes("prod")) {
    return ENV.production;
  }
};
