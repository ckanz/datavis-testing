var webpack = require('webpack');

module.exports = (config) => {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
      'spec/**/*.spec.js',
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'spec/**/*.spec.js': ['webpack'],
    },
    reporters: ['mocha'],
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: 'babel-loader',
                query: {
                  presets: ['env']
                }
              }
            ],
            exclude: /node_modules/
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
