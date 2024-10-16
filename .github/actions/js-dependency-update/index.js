const core = require('@actions/core');

async function run() {
  /*
  1. parse inputs: 
    1.1 base-branch from which to check for updates
    1.2 target-branch to use to create the PR
    1.3 github token for authentication purposes ( to create PRs )
    1.4 working directory for which to check for dependencies
  2. execute the npm update command within the working directory 
  3. check whether there are modified package*.json files
  4. if there are modified files: 
    4.1 Add and commit files to the target-branch
    4.2 create a PR to the base-branch using the octokit API
  5. otherwise, conclude the custom action 
  */
  core.info('I am a custom JS action');
}

run();
