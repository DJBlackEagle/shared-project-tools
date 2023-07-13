import { commitlint } from './commitlint';
import { eslint } from './eslint';
import { lintStaged } from './lint-staged';
import { nanoStaged } from './nano-staged';
import { prettier } from './prettier';
import { releaseIt } from './release-it';

export const config = { commitlint, eslint, lintStaged, nanoStaged, prettier, releaseIt };
