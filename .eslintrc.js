const config = require('./config');

const data = {
  ...config.eslint.typescript.base,
  parserOptions: { ...config.eslint.typescript.base.parserOptions, tsconfigRootDir: __dirname },
};

module.exports = data;
