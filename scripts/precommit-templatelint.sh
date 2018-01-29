#!/bin/sh
#
# Lints changes using ESLint.
echo "[hippojs]--------------------------------------------------------------------------------"
echo "[hippojs] Starting Ember Template Lint"

# Get a list of staged changes to hbs files.
LIST=`git diff --cached --name-only | grep -e "\.hbs$"`

# If there are changed files...
if [ -n "$LIST" ]
then
# Uncomment the following line to view which files are being linted.
echo "[hippojs] Files we're checking with ember-template-lint: "$LIST

# ...lint them...
node_modules/.bin/ember-template-lint $LIST
# ...and exit with the linter's exit code.
exit $?

echo "[hippojs] Ember Template Lint"
else
echo "[hippojs] No hbs changes detected, not linting!"
echo "[hippojs] Ember Template Lint"
echo "[hippojs]--------------------------------------------------------------------------------"
fi

# Otherwise, succeed.
exit 0
