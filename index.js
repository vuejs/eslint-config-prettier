const recommendedConfig = require("eslint-config-prettier/recommended");

module.exports = {
  ...recommendedConfig,
  rules: {
    ...recommendedConfig.rules,
    // should warn instead of error because formatting is not a critical issue
    "prettier/prettier": "warn",
  },
};
