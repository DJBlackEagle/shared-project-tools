/* eslint-disable no-console */
import { BranchSummaryBranch } from 'simple-git';

function isBranchGone(branch: BranchSummaryBranch): boolean {
  if (!branch) {
    console.log('Branch object is null.');

    return false;
  }

  const goneMessage = '[gone] ';

  return branch.label.length > goneMessage.length && branch.label.substring(0, goneMessage.length) === goneMessage;
}

export { isBranchGone };
