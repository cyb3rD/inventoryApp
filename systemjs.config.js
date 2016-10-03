/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the js/app folder
      app: 'js/app',
      // angular bundles
      '@angular/core': 'js/vendor/@angular/core.umd.js',
      '@angular/common': 'js/vendor/@angular/common.umd.js',
      '@angular/compiler': 'js/vendor/@angular/compiler.umd.js',
      '@angular/platform-browser': 'js/vendor/@angular/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'js/vendor/@angular/platform-browser-dynamic.umd.js',
      '@angular/http': 'js/vendor/@angular/http.umd.js',
      '@angular/router': 'js/vendor/@angular/router.umd.js',
      '@angular/forms': 'js/vendor/@angular/forms.umd.js',
      // other libraries
      'rxjs':                      'js/vendor/rxjs',
    //   'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);