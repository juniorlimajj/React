#!/bin/bash
# Script do preguiçoso

git status
git add . 
read -p "Enter your commit message: " COMMITMESSAGE
git commit -m "${COMMITMESSAGE}"
CURRENT="$(git master)"
read -p "Enter your branch: (Your current branch is ${CURRENT})" BRANCH
git push origin ${BRANCH}
