var webpack = require('webpack');

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
      'spec/integration/**/*.spec.js',
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'spec/**/*.spec.js': ['webpack'],
    },
    reporters: ['mocha'],
    webpack: {
      mode: 'production',
      module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/preset-env']
                }
              }
            ],
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
