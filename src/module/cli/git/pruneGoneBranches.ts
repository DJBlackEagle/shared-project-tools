/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import { resources } from '../../../resources';
import { createInstance, fetch, getBranchLocal, isBranchGone } from './functions';

type PruneGoneBranchesOptions = {
  dryDrun: boolean;
  forceDelete: boolean;
};

async function pruneGoneBranches(param: PruneGoneBranchesOptions | null): Promise<boolean> {
  console.log('Prune all branches, which not exists remote.');

  const options: PruneGoneBranchesOptions = {
    dryDrun: param?.dryDrun ? param.dryDrun : false,
    forceDelete: param?.forceDelete ? param.forceDelete : false,
  };

  const client = createInstance();
  if (!client) {
    console.log('Git client is null.'.red);

    return false;
  }

  await fetch(client);
  const localBranches = await getBranchLocal(client);
  if (!localBranches) {
    console.log('Get local branches failed.'.red);

    return false;
  }
  if (!localBranches.branches) {
    console.log('Local branch list is null'.red);

    return false;
  }

  const keys: string[] = Object.keys(localBranches.branches);
  console.log('Found local branches:'.white);

  let success: boolean = true;

  for (let index = 0; index < keys.length; index += 1) {
    const branch = localBranches.branches[keys[index]];

    if (branch.current) {
      console.log(
        `  ${isBranchGone(branch) ? resources.icons.waste : resources.icons.branch} ${branch.name} (Active branch)`.blue
          .italic.bold,
      );
    } else if (isBranchGone(branch)) {
      try {
        if (options.dryDrun) {
          console.log('Dry Run is active... Options:'.green, options);
        } else {
          await client.deleteLocalBranch(branch.name, options.forceDelete);
        }

        console.log(`  ${resources.icons.waste} ${branch.name} (Branch deleted)`.green);
      } catch (err: any) {
        success = false;

        console.log(`  ${resources.icons.waste} ${branch.name} (Failed to delete the branch)`.yellow);
        console.log(`      ${err.message.replace(/(\r\n|\n|\r)/gm, '')}`.yellow.dim);
      }
    } else {
      console.log(`  ${resources.icons.branch} ${branch.name} (Remote branch exists)`.blue);
    }
  }

  console.log();
  console.log();
  if (success) {
    console.log(`${resources.icons.ok} Successful all gone branches deleted.`.green);
  } else {
    console.log(`${resources.icons.error} Not successful all gone branches deleted.`.yellow);
  }

  return true;
}

export { PruneGoneBranchesOptions, pruneGoneBranches };
