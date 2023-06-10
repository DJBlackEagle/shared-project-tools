# <a name="jump_top"></a> Contributing to @djblackeagle/shared-project-tools

As a contributor, here are the guidelines we would like you to follow: :smile:

- [Code of Conduct](#jump_coc)
- [Issues and Bugs](#jump_issue)
- [Feature Requests](#jump_feature)
- [Submission Guidelines](#jump_submit)
- [Development Setup](#jump_development)
- [Coding Rules](#jump_rules)
- [Commit Message Guidelines](#jump_commit)

<br />
<br />

## <a name="jump_coc"></a> Code of Conduct [⬆️](#jump_top)

Help us keep open and inclusive. Please read and follow our [Code of Conduct][coc].

## <a name="jump_issue"></a> Found a Bug? [⬆️](#jump_top)

If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository][github]. Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

## <a name="jump_feature"></a> Missing a Feature? [⬆️](#jump_top)

You can _request_ a new feature by [submitting an issue](#submit-issue) to our GitHub
Repository. If you would like to _implement_ a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.
Please consider what kind of change it is:

- For a **Major Feature**, first open an issue and outline your proposal so that it can be
  discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
  and help you to craft the change so that it is successfully accepted into the project. For your issue name, please prefix your proposal with `[discussion]`, for example "`[discussion]: your feature idea`".
- **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

## <a name="jump_submit"></a> Submission Guidelines [⬆️](#jump_top)

### <a name="jump_submit-issue"></a> Submitting an Issue [⬆️](#jump_top)

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs we will systematically ask you to provide a minimal reproduction scenario using a repository or [Gist](https://gist.github.com/). Having a live, reproducible scenario gives us wealth of important information without going back & forth to you with additional questions like:

- version of shared-project-tools used
- 3rd-party libraries and their versions
- and most importantly - a use-case that fails

Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that doesn't have enough info to be reproduced.

You can file new issues by filling out our [new issue form][new_issue].

### <a name="jump_submit-pr"></a> Submitting a Pull Request (PR) [⬆️](#jump_top)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search [GitHub Pull Requests][gh_prs] for an open or closed PR
   that relates to your submission. You don't want to duplicate effort.
1. Fork this repository.
1. Make your changes in a new git branch:

   ```shell
   git checkout -b my-fix-branch master
   ```

1. Create your patch, **including appropriate test cases**.
1. Follow our [Coding Rules](#rules).
1. Run the full test suite (see [common scripts](#common-scripts)),
   and ensure that all tests pass.
1. Commit your changes using a descriptive commit message that follows our
   [commit message conventions](#commit). Adherence to these conventions
   is necessary because release notes are automatically generated from these messages.

   ```shell
   git commit -a
   ```

   Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

1. Push your branch to GitHub:

   ```shell
   git push origin my-fix-branch
   ```

1. In GitHub, send a pull request to `shared-project-tools:main`.

- If we suggest changes then:

  - Make the required updates.
  - Re-run the test suites to ensure tests are still passing.
  - Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged [⬆️](#jump_top)

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete my-fix-branch
  ```

- Check out the main branch:

  ```shell
  git checkout main -f
  ```

- Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

- Update your main with the latest upstream version:

  ```shell
  git pull --ff upstream main
  ```

## <a name="jump_development"></a> Development Setup [⬆️](#jump_top)

You will need [Node.js][nodejs] version >= 18.15.0 (except for v13).

1. After cloning the repo, run:

```bash
$ npm run repo:prepare
```

That will compile fresh packages and afterward, move them all to `sample` directories.

### <a name="jump_common-scripts"></a>Commonly used NPM scripts [⬆️](#jump_top)

```bash
# run the full unit tests suite
$ npm run test

# run Prettier
$ npm run prettier

# run linter
$ npm run lint
```

## <a name="jump_rules"></a> Coding Rules [⬆️](#jump_top)

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested** by one or more specs (unit-tests).
- We follow [Airbnb JavaScript Style Guide][js-style-guide], but wrap all code at
  **100 characters**. An automated formatter is available (`npm run prettier:fix`).

## <a name="jump_commit"></a> Commit Message Guidelines [⬆️](#jump_top)

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the change log**.

### Commit Message Format [⬆️](#jump_top)

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples][commits_samples])

```
docs(changelog): update change log to beta.5
fix(core): need to depend on latest rxjs and zone.js
```

### Revert [⬆️](#jump_top)

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type [⬆️](#jump_top)

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **chore**: Updating tasks etc; no production code change
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope [⬆️](#jump_top)

The scope should have the name of the npm package affected (as perceived by person reading changelog generated from commit messages).

The following is the list of supported scopes:

<!-- - **common**: for changes made on `packages/common` directory -->
<!-- - **core**: for changes made on `packages/core` directory -->
<!-- - **sample**: for changes made on `packages/sample` directory -->
<!-- - **microservices**: for changes made on `packages/microservices` directory -->
<!-- - **express**: for changes made on `packages/platform-express` directory -->
<!-- - **fastify**: for changes made on `packages/platform-fastify` directory -->
<!-- - **socket.io**: for changes made on `packages/platform-socket.io` directory -->
<!-- - **ws**: for changes made on `packages/platform-ws` directory -->
<!-- - **testing**: for changes made on `packages/testing` directory -->
<!-- - **websockets**: for changes made on `packages/websockets` directory -->

If your change affect more than one package, separate the scopes with a comma (e.g. `common,core`).

### Subject [⬆️](#jump_top)

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body [⬆️](#jump_top)

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer [⬆️](#jump_top)

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

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
