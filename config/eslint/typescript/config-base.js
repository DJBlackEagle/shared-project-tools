const prettierConfig = require('../../prettier');

module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true,
    node: true,
    mongo: true,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'no-console': ['error'],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.e2e-spec.ts',
          '**/*.spec.ts',
          '.commitlintrc.js',
          '.eslintrc.js',
          '.nano-staged.js',
          '.prettierrc.js',
          '.release-it.js',
        ],
      },
    ],
    'prettier/prettier': ['error', prettierConfig.base],
  },
  ignorePatterns: ['**/node_modules/**/*', '**/dist/*', '**/build/*'],
};
