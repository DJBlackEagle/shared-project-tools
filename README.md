# **Welcome to @djblackeagle/shared-project-tools**

# Contents

- [What is @djblackeagle/shared-project-tools](#what-is-djblackeagleshared-project-tools)
- [Benefits using this package?](#benefits-using-this-package)
- [How to contributing on this repository](#how-to-contributing-on-this-repository)
- [Getting started](#getting-started)
  - [Configure ESLint](#configure-eslint)
  - [Configure Prettier](#configure-prettier)
- [Using release-it config](#using-release-it-config)
- [Using commitlint config](#using-commitlint-config)
- [Using nano-staged config](#using-nano-staged-config)
- [Using lint-staged config](#using-lint-staged-config)

# What is @djblackeagle/shared-project-tools [⬆️](#welcome-to-djblackeagleshared-project-tools)

@djblackeagle/shared-project-tools shares configuration of commitlint, eslint, nano-staged, prettier and release-it.

# Benefits using this package? [⬆️](#welcome-to-djblackeagleshared-project-tools)

Easier code styling etc over multiple repositories. And it's esier, to update rules for code styles.

# How to contributing on this repository [⬆️](#welcome-to-djblackeagleshared-project-tools)

Read the [contributing file][contributing].

# Getting started [⬆️](#welcome-to-djblackeagleshared-project-tools)

Install @djblackeagle/shared-project-tools

npm

```sh
npm install --save-dev @djblackeagle/shared-project-tools
```

Yarn

```sh
yarn add --dev @djblackeagle/shared-project-tools
```

## Configure ESLint [⬆️](#welcome-to-djblackeagleshared-project-tools)

---

1. Create file `.eslintrc.js` in the root folder.
2. You can choose, which style of config you want. Here the base config.

```js
const config = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...config.eslint.typescript.base,
  parserOptions: {
    tsconfigRootDir: __dirname,
    extends: './tsconfig.eslint.json',
    project: ['./tsconfig.eslint.json'],
  },
};
```

3. Save file.
4. Create file `tsconfig.eslint.json` in the root folder.

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": { "noEmit": true },
  "exclude": [".yarn/*", "yarn.lock", "package-lock.json", "node_modules"],
  "include": ["**/*.ts", "**/*.tsx", "**/*.js", ".*.js"]
}
```

6. If you want change some options, you can do like this:

```js
const config = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...config.eslint.typescript.base,
  env: {
    ...config.eslint.typescript.base,
    node: false,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    extends: './tsconfig.eslint.json',
    project: ['./tsconfig.eslint.json'],
  },
};
```

## Configure Prettier [⬆️](#welcome-to-djblackeagleshared-project-tools)

---

1. Create file `.prettierrc.js` in the root folder.
2. You can choose, which style of config you want. Here the base config.

```js
const config = require('@djblackeagle/shared-project-tools');

module.exports = config.prettier.base;
```

3. Save file.
4. If you want change some options, you can do like this:

```js
const config = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...config.prettier.base,
  tabWidth: 4,
};
```

5. Create file `.prettierignore` in the root folder.
6. You can use this ignore pattern to ignore file for prettier.

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

# Using release-it config [⬆️](#welcome-to-djblackeagleshared-project-tools)

## Requirements

- No requirements

## Installing

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
const config = require('@djblackeagle/shared-project-tools');

module.exports = config.releaseIt.base;
```

4. Save file.
5. If you want change some options, you can do like this:

```js
const config = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...config.releaseIt.base,
  git: {
    ...config.releaseIt.base.git,
    push: false,
  },
};
```

# Using commitlint config [⬆️](#welcome-to-djblackeagleshared-project-tools)

## Requirements

- husky - How to install, look in the [documentation of husky](https://typicode.github.io/husky/).

## Installing

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
const config = require('@djblackeagle/shared-project-tools');

module.exports = config.commitlint.base;
```

4. Save file.
5. If you want change some options, you can do like this:

```js
const config = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...config.commitlint.base,
  rules: {
    ...config.commitlint.base.rules,
    'header-max-length': [2, 'always', 250],
  },
};
```

6. Add Git hook `commit-msg`

```sh
npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"
```

# Using nano-staged config [⬆️](#welcome-to-djblackeagleshared-project-tools)

## Requirements

- husky - How to install, look in the [documentation of husky](https://typicode.github.io/husky/).

## Installing

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
const config = require('@djblackeagle/shared-project-tools');

module.exports = config.nanoStaged.base;
```

4. Save file.
5. If you want change some options, you can do like this:

```js
const config = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...config.nanoStaged.base,
  '*.{xml}': (api) => `validate-xml.sh ${api.filenames.join(' ')}`,
};
```

6. Add Git hook `pre-commit`

```sh
npx husky add .husky/pre-commit "npx nano-staged"
```

# Using lint-staged config [⬆️](#welcome-to-djblackeagleshared-project-tools)

## Requirements

- husky - How to install, look in the [documentation of husky](https://typicode.github.io/husky/).

## Installing

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
const config = require('@djblackeagle/shared-project-tools');

module.exports = config.lintStaged.base;
```

4. Save file.
5. If you want change some options, you can do like this:

```js
const config = require('@djblackeagle/shared-project-tools');

module.exports = {
  ...config.lintStaged.base,
  '*.{xml}': (api) => `validate-xml.sh ${api.filenames.join(' ')}`,
};
```

6. Add Git hook `pre-commit`

```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

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
