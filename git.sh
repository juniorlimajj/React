git status
git add . 
read -p "Enter your commit message: " COMMITMESSAGE
git commit -m "${COMMITMESSAGE}"
read -p "Enter your branch: " BRANCH
git push origin BRANCH
