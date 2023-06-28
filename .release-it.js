const config = require('./config');

module.exports = {
  ...config.releaseIt.base,
  github: {
    ...config.releaseIt.base.github,
    draft: true,
  },
  hooks: {
    ...config.releaseIt.base.hooks,
    'before:release': 'npx prettier --write . && git add . --update',
  },
};
