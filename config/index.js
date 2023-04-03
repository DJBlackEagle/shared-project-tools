const commitlint = require('./commitlint');
const eslint = require('./eslint');
const lintStaged = require('./lint-staged');
const nanoStaged = require('./nano-staged');
const prettier = require('./prettier');
const releaseIt = require('./release-it');

module.exports = {
  commitlint,
  eslint,
  lintStaged,
  nanoStaged,
  prettier,
  releaseIt,
};
