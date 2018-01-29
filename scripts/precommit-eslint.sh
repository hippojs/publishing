
#!/bin/sh
#
# Lints changes using ESLint.
echo "[hippojs]--------------------------------------------------------------------------------"
echo "[hippojs] Starting ES Lint"

# Get a list of staged changes to javascript files.
LIST=`git diff --cached --name-only | grep -e "\.js$"`

# If there are changed files...
if [ -n "$LIST" ]
then
# Uncomment the following line to view which files are being linted.
echo "[hippojs] Files we're checking with eslint: "$LIST

# ...lint them...
node_modules/eslint/bin/eslint.js $LIST
# ...and exit with the linter's exit code.
exit $?

echo "[hippojs] ES Lint complete"
else
echo "[hippojs] No Javascript changes detected, not linting!"
echo "[hippojs] ES Lint complete"
echo "[hippojs]--------------------------------------------------------------------------------"
fi

# Otherwise, succeed.
exit 0
