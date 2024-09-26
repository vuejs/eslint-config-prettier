const recommendedConfig = require("eslint-plugin-prettier/recommended");

module.exports = {
  ...recommendedConfig,
  rules: {
    ...recommendedConfig.rules,
    // should warn instead of error because formatting is not a critical issue
    "prettier/prettier": "warn",
  },
};
