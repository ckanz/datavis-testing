set -e

npm i
npm run build
npm test
npm run e2e
npm run visual-regression
