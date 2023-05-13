const config = require('./config');

const data = {
  ...config.eslint.typescript.base,
  parserOptions: {
    tsconfigRootDir: __dirname,
    extends: './tsconfig.eslint.json',
    project: ['./tsconfig.eslint.json'],
  },
};

module.exports = data;
