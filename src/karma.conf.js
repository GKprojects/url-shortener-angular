// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
// karma.conf.js

module.exports = function(config) {
  config.set({
    // ... other Karma configuration settings ...

    reporters: ['progress', 'xml'],

    // Add the xmlReporter configuration
    xmlReporter: {
      outputFile: 'test-results.xml' // Specify the desired output file name and path
    },

    // ... other Karma configuration settings ...
  });
};

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      // require('karma-xml-reporter'),
      require('karma-coverage'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
  
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
      
  });
};
