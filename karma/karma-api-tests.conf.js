module.exports = function (config) {
  config.set({
    basePath: '.',

    files: [
        'api-tests.js',
        '../knockoutjs_demo/lib/jquery-2.0.3.min.js'
    ],

      proxies: {
          '/demo/': 'http://127.0.0.1/angularjs_demo/',
      },
      
    frameworks: ['jasmine'],

    autoWatch: true,

    browsers: ['Chrome']
  });
};
