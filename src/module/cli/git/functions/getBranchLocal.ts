import { BranchSummary, SimpleGit } from 'simple-git';

/* eslint-disable no-console */
async function getBranchLocal(gitClient: SimpleGit): Promise<BranchSummary | null> {
  if (!gitClient) {
    console.log('Git client is null.');

    return Promise.resolve(null);
  }

  try {
    return await gitClient.branchLocal();
  } catch (err) {
    console.error('Can not get local branches.');
    console.error(err);

    return Promise.resolve(null);
  }
}

export { getBranchLocal };
