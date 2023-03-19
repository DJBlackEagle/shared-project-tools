const config = require('./config');

module.exports = {
  ...config.releaseIt.base,
  hooks: {
    ...config.releaseIt.base.hooks,
    'before:release': 'npx prettier --write . && git add . --update',
  },
};
