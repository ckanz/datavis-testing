set -e

npm i

npm run build

npm run test:unit
npm run test:integration
npm run test:e2e
npm run test:visual-regression
