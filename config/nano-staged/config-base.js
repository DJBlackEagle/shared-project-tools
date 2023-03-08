module.exports = {
  '*.{js,jsx,ts,tsx,md,html,css,json}': (api) => `prettier --check ${api.filenames.join(' ')}`,
  '*.{js,jsx,ts,tsx}': (api) => `eslint ${api.filenames.join(' ')}`,
};
