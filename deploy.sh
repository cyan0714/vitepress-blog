#!/usr/bin/env sh

set -e

npm run docs:build

# cd docs/.vitepress/dist

git add docs/.vitepress/dist/
git commit -m "自动部署"
git push -f https://github.com/cyan0714/knowleage-lib.git master:gh-docs

cd -
# rm -rf docs/.vitepress/dist
