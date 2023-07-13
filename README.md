# **Welcome to @djblackeagle/shared-project-tools**

# Contents

- [What is @djblackeagle/shared-project-tools](#what-is-djblackeagleshared-project-tools)
- [Benefits using this package?](#benefits-using-this-package)
- [How to clone this repository](#how-to-clone-this-repository)
- [Getting started](#getting-started)
  - [Using ESLint config](#using-eslint-config)
  - [Using Prettier config](#using-prettier-config)
  - [Using release-it config](#using-release-it-config)
  - [Using commitlint config](#using-commitlint-config)
  - [Using nano-staged config](#using-nano-staged-config)
  - [Using lint-staged config](#using-lint-staged-config)

# What is @djblackeagle/shared-project-tools

@djblackeagle/shared-project-tools shares configuration of commitlint, eslint, nano-staged, prettier and release-it.

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

# Benefits using this package?

Easier code styling etc over multiple repositories. And it's esier, to update rules for code styles.

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

# How to clone this repository

1. Clone this repository with `git clone` command.
2. Execute the following command:

```sh
npm run repo:prepare
```

3. This command will prepare the repository automatically. It's install all needed dependencies and all other things.

This repository **`use Yarn instead of NPM`**. NPM is only used for publishing the package via GitHub workflow.

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

# Getting started

Install @djblackeagle/shared-project-tools

npm

```sh
npm install --save-dev @djblackeagle/shared-project-tools
```

Yarn

```sh
yarn add --dev @djblackeagle/shared-project-tools
```

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

## Using ESLint config

### Requirements

- Prettier - Prefer this prettier base config. [How to use it](#using-prettier-config).

### Installing

1. Install `eslint` and other dependencies in your package as devDependencies.

npm

```sh
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier prettier
```

Yarn

```sh
yarn add --dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier prettier
```

2. Create file `.eslintrc.js` in the root folder.
3. You can choose, which style of config you want. Here the base config.

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...sharedPrjTools.config.eslint.typescript.base,
  parserOptions: {
    tsconfigRootDir: __dirname,
    extends: './tsconfig.eslint.json',
    project: ['./tsconfig.eslint.json'],
  },
};
```

4. Save file.
5. Create file `tsconfig.eslint.json` in the root folder.

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": { "noEmit": true },
  "exclude": [".yarn/*", "yarn.lock", "package-lock.json", "node_modules"],
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/.*.js"]
}
```

6. If you want change some options, you can do like this:

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...sharedPrjTools.config.eslint.typescript.base,
  env: {
    ...sharedPrjTools.config.eslint.typescript.base,
    node: false,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    extends: './tsconfig.eslint.json',
    project: ['./tsconfig.eslint.json'],
  },
};
```

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

## Using Prettier config

### Requirements

- No requirements

### Installing

1. Install `prettier` and other dependencies in your package as devDependencies.

npm

```sh
npm install --save-dev prettier
```

Yarn

```sh
yarn add --dev prettier
```

2. Create file `.prettierrc.js` in the root folder.
3. You can choose, which style of config you want. Here the base config.

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = sharedPrjTools.config.prettier.base;
```

4. Save file.
5. If you want change some options, you can do like this:

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...sharedPrjTools.config.prettier.base,
  tabWidth: 4,
};
```

6. Create file `.prettierignore` in the root folder.
7. You can use this ignore pattern to ignore file for prettier.

```
**/.git/
**/node_modules/
**/.yarn/
.husky/
**/dist/*
**/build/*
yarn.lock
package-lock.json
```

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

## Using release-it config

### Requirements

- No requirements

### Installing

1. Install `release-it` and other dependencies in your package as devDependencies.

npm

```sh
npm install --save-dev release-it @release-it/conventional-changelog
```

Yarn

```sh
yarn add --dev release-it @release-it/conventional-changelog
```

2. Create file `.release-it.js` in the root folder.
3. You can choose, which style of config you want. Here the base config.

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = sharedPrjTools.config.releaseIt.base;
```

4. Save file.
5. If you want change some options, you can do like this:

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...sharedPrjTools.config.releaseIt.base,
  git: {
    ...sharedPrjTools.config.releaseIt.base.git,
    push: false,
  },
};
```

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

## Using commitlint config

### Requirements

- husky - How to install, look in the [documentation of husky](https://typicode.github.io/husky/).

### Installing

1. Install `commitlint` and other dependencies in your package as devDependencies.

npm

```sh
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

Yarn

```sh
yarn add --dev @commitlint/cli @commitlint/config-conventional
```

2. Create file `.commitlintrc.js` in the root folder.
3. You can choose, which style of config you want. Here the base config.

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = sharedPrjTools.config.commitlint.base;
```

4. Save file.
5. If you want change some options, you can do like this:

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...sharedPrjTools.config.commitlint.base,
  rules: {
    ...sharedPrjTools.config.commitlint.base.rules,
    'header-max-length': [2, 'always', 250],
  },
};
```

6. Add Git hook `commit-msg`

```sh
npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"
```

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

## Using nano-staged config

### Requirements

- husky - How to install, look in the [documentation of husky](https://typicode.github.io/husky/).

### Installing

1. Install `nano-staged` and other dependencies in your package as devDependencies.

npm

```sh
npm install --save-dev nano-staged
```

Yarn

```sh
yarn add --dev nano-staged
```

2. Create file `.nano-staged.js` in the root folder.
3. You can choose, which style of config you want. Here the base config.

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = sharedPrjTools.config.nanoStaged.base;
```

4. Save file.
5. If you want change some options, you can do like this:

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...sharedPrjTools.config.nanoStaged.base,
  '*.{xml}': (api) => `validate-xml.sh ${api.filenames.join(' ')}`,
};
```

6. Add Git hook `pre-commit`

```sh
npx husky add .husky/pre-commit "npx nano-staged"
```

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

## Using lint-staged config

### Requirements

- husky - How to install, look in the [documentation of husky](https://typicode.github.io/husky/).

### Installing

1. Install `lint-staged` and other dependencies in your package as devDependencies.

npm

```sh
npm install --save-dev lint-staged
```

Yarn

```sh
yarn add --dev lint-staged
```

2. Create file `.lintstagedrc.js` in the root folder.
3. You can choose, which style of config you want. Here the base config.

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = sharedPrjTools.config.lintStaged.base;
```

4. Save file.
5. If you want change some options, you can do like this:

```js
const sharedPrjTools = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...sharedPrjTools.config.lintStaged.base,
  '*.{xml}': (api) => `validate-xml.sh ${api.filenames.join(' ')}`,
};
```

6. Add Git hook `pre-commit`

```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

# CLI commands

Console

```sh
npx djbe-shared-project-tools
```

In package.json

```json
{
  "git:clean": "djbe-shared-project-tools git pruneGoneBranches"
}
```

# Commands

## git

This main command, holds some git tools commands (like pruneGoneBranches).

### git pruneGoneBranches

This command would delete all branches, which doesn't exists anymore and merged already. If the current branch is deleted already remote, it will not delete the current local branch.

- Parameter `-f, --force`: You can force to delete the local branch, even the branch is not merged already remote.
- Parameter `-d, --dry-run`: This option don't delete any branches.

Console

```sh
npx djbe-shared-project-tools git pruneGoneBranches
```

[[Go to top](#welcome-to-djblackeagleshared-project-tools)]

[coc]: https://github.com/DJBlackEagle/shared-project-tools/blob/main/CODE_OF_CONDUCT.md
[readme]: https://github.com/DJBlackEagle/shared-project-tools/blob/main/README.md
[changelog]: https://github.com/DJBlackEagle/shared-project-tools/blob/main/CHANGELOG.md
[contributing]: https://github.com/DJBlackEagle/shared-project-tools/blob/main/CONTRIBUTING.md
[license]: https://github.com/DJBlackEagle/shared-project-tools/blob/main/LICENSE
[commit-message-format]: https://www.conventionalcommits.org
[github]: https://github.com/DJBlackEagle/shared-project-tools
[js-style-guide]: https://github.com/airbnb/javascript
[new_issue]: https://github.com/DJBlackEagle/shared-project-tools/issues
[gh_prs]: https://github.com/DJBlackEagle/shared-project-tools/pulls
[commits_samples]: https://github.com/DJBlackEagle/shared-project-tools/commits/main
[nodejs]: https://nodejs.org
[npm_husky]: https://typicode.github.io/husky
[npm_eslint]: https://eslint.org
[npm_prettier]: https://prettier.io/
[new_vulnerability]: https://github.com/DJBlackEagle/shared-project-tools/security/advisories/new
