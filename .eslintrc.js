const config = require('./config');

const data = {
  ...config.eslint.typescript.base,
  parserOptions: {
    tsconfigRootDir: __dirname,
    extends: './tsconfig.eslint.json',
    project: ['./tsconfig.eslint.json'],
  },
  rules: { ...config.eslint.typescript.base.rules, '@typescript-eslint/no-var-requires': 'off' },
};

module.exports = data;
