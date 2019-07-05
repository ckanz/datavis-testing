# datavis-testing

This repository contains the code used in [this Medium post about the front-end testing of data visualisations](https://medium.com/empathyco/the-front-end-testing-of-data-visualizations-29a5644b9e0e). It contains a basic d3 chart and several test frameworks to test it.

Here are the steps to run the project:

- installing dependencies: `npm install`
- building the project: `npm build`
- hosting visualisation: `npm run serve`
- running unit tests with [Karma](https://karma-runner.github.io/latest/index.html) and [PhantomJS](https://phantomjs.org/): `npm run test:unit`
- running integration tests with [Karma](https://karma-runner.github.io/latest/index.html) and [PhantomJS](https://phantomjs.org/): `npm run test:integration`
- running e2e tests with [CasperJS](https://github.com/casperjs/casperjs): `npm run test:e2e`
- running visual-regression tests with [CasperJS](https://github.com/casperjs/casperjs) and [PhantomCSS](https://github.com/HuddleEng/PhantomCSS): `npm run test:visual-regression`
