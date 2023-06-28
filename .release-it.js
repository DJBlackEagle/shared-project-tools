const config = require('./config');

module.exports = {
  ...config.releaseIt.base,
  hooks: {
    ...config.releaseIt.base.hooks,
    'before:release': 'yarn run prettier:fix && yarn run lint && git add . --update',
  },
};
