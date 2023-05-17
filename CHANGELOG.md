# Changelog

## [2.1.1](https://github.com/DJBlackEagle/shared-project-tools/compare/2.1.0...2.1.1) (2023-05-17)

## [2.1.0](https://github.com/DJBlackEagle/shared-project-tools/compare/2.0.0...2.1.0) (2023-05-13)

### Features

- **ESLint:** forbid to use console commands ([dba6c2a](https://github.com/DJBlackEagle/shared-project-tools/commit/dba6c2a3fc3c7e9bd580ef8087d1577f22162c16)), closes [#166](https://github.com/DJBlackEagle/shared-project-tools/issues/166)

## [2.0.0](https://github.com/DJBlackEagle/shared-project-tools/compare/1.1.5...2.0.0) (2023-05-13)

### ⚠ BREAKING CHANGES

- **eslint:** The parserOptions must not defined in the project eslint config.
- **ESLint:** Removed requireConfigFile, include, exclude on ESLint base config at the
  parserOptions.

### Features

- **commitlint:** increase the header message to 100 and body message to 150 ([3b7a760](https://github.com/DJBlackEagle/shared-project-tools/commit/3b7a760ac458a829a955463b3dca57dea5f3a158)), closes [#156](https://github.com/DJBlackEagle/shared-project-tools/issues/156)
- **eslint:** add global ignorePatterns to eslint base config ([12d0ba9](https://github.com/DJBlackEagle/shared-project-tools/commit/12d0ba95d99bc34912fa1c8c4d0462f2feb2b8fb)), closes [#134](https://github.com/DJBlackEagle/shared-project-tools/issues/134)
- **eslint:** remove parserOptions from typescript base config ([573edd4](https://github.com/DJBlackEagle/shared-project-tools/commit/573edd4272f3adf00f37ad2e5f81d98f90f06e41)), closes [#140](https://github.com/DJBlackEagle/shared-project-tools/issues/140)

### Bug Fixes

- **ESLint:** remove requireConfigFile, include, exclude on base config ([1dfbb50](https://github.com/DJBlackEagle/shared-project-tools/commit/1dfbb501e6cd0dedf5622856279ebac2526b6112)), closes [#135](https://github.com/DJBlackEagle/shared-project-tools/issues/135)

### Documentation

- **project:** add missing config docu for eslint config ([8fd81a4](https://github.com/DJBlackEagle/shared-project-tools/commit/8fd81a40a1ded7fc940d94c10715f263a352a2e1)), closes [#141](https://github.com/DJBlackEagle/shared-project-tools/issues/141)

## [1.1.5](https://github.com/DJBlackEagle/shared-project-tools/compare/1.1.4...1.1.5) (2023-04-23)

## [1.1.4](https://github.com/DJBlackEagle/shared-project-tools/compare/1.1.3...1.1.4) (2023-04-13)

### Documentation

- **readme:** change yarn command parameter, to long form parameter ([2f092e5](https://github.com/DJBlackEagle/shared-project-tools/commit/2f092e5790640f784422d65dba143c0ab03a4c2c)), closes [#115](https://github.com/DJBlackEagle/shared-project-tools/issues/115)

## [1.1.3](https://github.com/DJBlackEagle/shared-project-tools/compare/1.1.2...1.1.3) (2023-04-12)

## [1.1.2](https://github.com/DJBlackEagle/shared-project-tools/compare/1.1.1...1.1.2) (2023-04-11)

### Documentation

- **project:** fix yarn commands in readme ([da297f0](https://github.com/DJBlackEagle/shared-project-tools/commit/da297f0c6ba656fcf7ac7b68bac5264e31e2a636)), closes [#108](https://github.com/DJBlackEagle/shared-project-tools/issues/108)

## [1.1.1](https://github.com/DJBlackEagle/shared-project-tools/compare/1.1.0...1.1.1) (2023-04-11)

## [1.1.0](https://github.com/DJBlackEagle/shared-project-tools/compare/1.0.0...1.1.0) (2023-04-06)

### Features

- **lint-staged:** add lint-staged base config ([d489293](https://github.com/DJBlackEagle/shared-project-tools/commit/d4892939d9d25c0943099aa1db71a8dc18936b6f)), closes [#88](https://github.com/DJBlackEagle/shared-project-tools/issues/88)

### Documentation

- **lint-staged:** add usage information of lint-staged base config ([aae30ad](https://github.com/DJBlackEagle/shared-project-tools/commit/aae30ade204036cc569706c9ae265ac230b3100e)), closes [#90](https://github.com/DJBlackEagle/shared-project-tools/issues/90)
- **project:** add information, how to use this project repository ([36eda98](https://github.com/DJBlackEagle/shared-project-tools/commit/36eda98947e6e851dc9eac50218b8226357e5f4a)), closes [#84](https://github.com/DJBlackEagle/shared-project-tools/issues/84)

## 1.0.0 (2023-03-19)

### Features

- **commitlint:** add commitlint base config ([54a7a28](https://github.com/DJBlackEagle/shared-project-tools/commit/54a7a28d993961b75e43796fc73373db70421911)), closes [#4](https://github.com/DJBlackEagle/shared-project-tools/issues/4)
- **ESLint:** add ESLint base config ([54f43bb](https://github.com/DJBlackEagle/shared-project-tools/commit/54f43bb26c21ccf5997509cd6d3c0ab77ca23fc8)), closes [#7](https://github.com/DJBlackEagle/shared-project-tools/issues/7)
- **nano-staged:** add nano-staged base config ([c054f0d](https://github.com/DJBlackEagle/shared-project-tools/commit/c054f0db6e55a48e9281c5aa93a009901d31cf18)), closes [#9](https://github.com/DJBlackEagle/shared-project-tools/issues/9)
- **Prettier:** add Prettier base config ([0e9c400](https://github.com/DJBlackEagle/shared-project-tools/commit/0e9c40038460f9e5166ba3b74a848fc45112e653)), closes [#5](https://github.com/DJBlackEagle/shared-project-tools/issues/5)
- **release-it:** add base config ([9961123](https://github.com/DJBlackEagle/shared-project-tools/commit/99611239389e5627386b2745837593528c03cbd3)), closes [#13](https://github.com/DJBlackEagle/shared-project-tools/issues/13)

### Bug Fixes

- **project:** add scope name ([99ef5d3](https://github.com/DJBlackEagle/shared-project-tools/commit/99ef5d3152c5de16bc6062e93b70d6d9e1fe1e43)), closes [#50](https://github.com/DJBlackEagle/shared-project-tools/issues/50)
- **release-it:** add mising release-it plugin conventional-changelog ([2bb5d0b](https://github.com/DJBlackEagle/shared-project-tools/commit/2bb5d0b4b0287c03a1a3bbef261bdae5d82f1a2a)), closes [#48](https://github.com/DJBlackEagle/shared-project-tools/issues/48)

### Documentation

- **readme:** add readme ([004d636](https://github.com/DJBlackEagle/shared-project-tools/commit/004d63654d11b2930994532b301dd1c2c5581c29)), closes [#17](https://github.com/DJBlackEagle/shared-project-tools/issues/17)
