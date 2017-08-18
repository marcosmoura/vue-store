set -e

CLEAR='\033c'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# init the process
if [[ -z $1 ]]; then
  printf $CLEAR
  echo "${BLUE}Enter new version: ${NC}"
  read VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r

if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "${CLEAR}Releasing Vue Store - ${GREEN}Version $VERSION${NC}"


  echo "\n${YELLOW}Checking for errors... ${NC}"
  yarn lint


  echo "\n${YELLOW}Running all tests... ${NC}"
  yarn test


  echo "\n${YELLOW}Generating build... ${NC}"
  VERSION=$VERSION yarn build


  echo "\n${YELLOW}Generating changelog... ${NC}"
  yarn changelog
  rm -rf RELEASE_NOTES.md


  echo "\n${YELLOW}Commiting... ${NC}"
  git add -A
  git commit -m "chore: build $VERSION"
  npm version $VERSION --message "chore: release $version"
  git push


  echo "\n${YELLOW}Publishing a new release... ${NC}"
  npm publish


  echo "\n${GREEN}BUILD FINISHED WITH SUCCESS!${NC}"
fi
