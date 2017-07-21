// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-electron')
    ],
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    // If you would like Node.js integration support (e.g. `require`)
//   then, you must include this in `preprocessors` and `client`
// DEV: preprocessors is for backfilling `__filename` and local `require` paths
    preprocessors: {
      '**/*.js': ['electron']
    },
// DEV: `useIframe: false` is for launching a new window instead of using an iframe
//   In Electron, iframes don't get `nodeIntegration` priveleges yet windows do
    client: {
      clearContext: false,
      useIframe: false
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Electron'],
    singleRun: false
  });
};
