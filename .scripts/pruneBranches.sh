#/bin/bash
#
# Delete all local tracking branches that doesn't exists anymore on origin.
#
################

echo "Remove any remote-tracking references that no longer exist on the remote."

echo "Fetch and prune git."
git fetch --prune

echo "Query if some branches are gone."
export GIT_DELETE_THIS_BRANCHES=$(git branch -r | awk '{print $1}' | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk '{print $1}' | xargs echo)

if [ -n "$GIT_DELETE_THIS_BRANCHES" ]; then
  echo "Delete all local tracking branches that doesn't exists anymore on origin."
  echo "Show local branches."
  git branch -vv
  echo Delete this branches: $GIT_DELETE_THIS_BRANCHES
  git branch -r | awk '{print $1}' | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk '{print $1}' | xargs git branch -d
  echo "Show local branches after prune."
  git branch -vv
else
  echo "No branches are gone."
fi

export -n GIT_DELETE_THIS_BRANCHES

exit 0
