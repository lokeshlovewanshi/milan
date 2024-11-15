module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: `.env.${process.env.APP_ENV || "development"}`, // Fallback to .env.development
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
