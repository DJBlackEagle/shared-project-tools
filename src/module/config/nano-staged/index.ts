const base = {
  '*.{js,jsx,ts,tsx,md,html,css,json,yml}': (api: any) => `prettier --check ${api.filenames.join(' ')}`,
  '*.{js,jsx,ts,tsx}': (api: any) => `eslint ${api.filenames.join(' ')}`,
};

export const nanoStaged = { ...base };
