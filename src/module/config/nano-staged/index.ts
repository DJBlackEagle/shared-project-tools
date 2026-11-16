const base = {
  '*.{js,jsx,ts,tsx,md,html,css,json,yml}': (api: any) => `prettier --check ${api.filenames.join(' ')}`,
};

export const nanoStaged = { ...base };
