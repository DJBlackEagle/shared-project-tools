/* eslint-disable import/no-extraneous-dependencies */
import colors from 'colors';
import { program } from 'commander';
import { version } from '../package.json';
import { cli } from './module';

colors.enable();

program
  .name('djbe-shared-project-tools')
  .description('This tools help with some Git commands for a repo.')
  .version(version);

const cmdGit = program.command('git').description('Git tools.');

cmdGit
  .command('pruneGoneBranches')
  .description('Delete all gone local branches.')
  .option('-f, --force', 'Force to delete gone local branch.')
  .option('-d, --dry-run', 'Dry run (No delete a branch).')
  .action(async (options: any): Promise<void> => {
    await cli.git.pruneGoneBranches({ dryDrun: options.dryRun, forceDelete: options.force });
  });

program.parseAsync();
