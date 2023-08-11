/* eslint-disable no-console */
import { SimpleGit } from 'simple-git';

async function pull(gitClient: SimpleGit): Promise<boolean> {
  if (!gitClient) {
    console.log('Git client is null.');

    return Promise.resolve(false);
  }

  try {
    await gitClient.pull();

    return await Promise.resolve(true);
  } catch (err) {
    console.error('Can not fetch branches.');
    console.error(err);

    return Promise.resolve(false);
  }
}

export { pull };
