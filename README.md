# Deprecated

Please [use `eslint-plugin-prettier` directly](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration).

To migrate from `@vue/eslint-config-prettier`:
1. `npm add -D eslint-config-prettier eslint-plugin-prettier`
2. `npm remove @vue/eslint-config-prettier`
3. Change `@vue/prettier` to `plugin:prettier/recommended` in your ESLint configuration
4. If there's `@vue/prettier/@typescript-eslint` in the existing configuration, remove it.

# @vue/eslint-config-prettier

> eslint-config-prettier for Vue CLI

This config is specifically designed to be used by Vue CLI setups
and is not meant for outside use (it can be used but some adaptations
on the user side might be needed - for details see the config file).

A part of its design is that this config may implicitly depend on
other parts of Vue CLI setups, such as `eslint-plugin-vue` being
extended in the same resulting config.
