import { commitlint } from './commitlint';
import { lintStaged } from './lint-staged';
import { nanoStaged } from './nano-staged';
import { prettier } from './prettier';
import { releaseIt } from './release-it';

export const sharedConfig = { commitlint, lintStaged, nanoStaged, prettier, releaseIt };
