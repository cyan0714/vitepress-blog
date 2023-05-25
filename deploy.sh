#!/usr/bin/env sh

set -e

npm run docs:build

# cd docs/.vitepress/dist
git init
git add -A
git commit -m "自动部署"
git push -f https://github.com/cyan0714/knowleage-lib.git master:gh-website

cd -
# rm -rf docs/.vitepress/dist
