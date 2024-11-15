import "dotenv/config";

export default ({ config }) => {
  const appEnv = process.env.APP_ENV || "development";

  return {
    ...config,
    extra: {
      appEnv, // You can check this in the app to confirm it's correctly set
      apiUrl: process.env.APP_ENV_NAME,
      apiKey: process.env.API_KEY,
    },
  };
};
