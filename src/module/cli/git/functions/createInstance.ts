import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

/**
 * Create a instance of the SimpleGit class.
 *
 * @param {string} [baseDir=process.cwd()]
 * @returns {(SimpleGit | null)}
 */
function createInstance(baseDir: string = process.cwd()): SimpleGit | null {
  const configSimpleGit: Partial<SimpleGitOptions> = {
    baseDir,
    binary: 'git',
    maxConcurrentProcesses: 6,
    trimmed: false,
  };

  return simpleGit(configSimpleGit);
}

export { createInstance };
