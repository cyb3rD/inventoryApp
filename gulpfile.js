var gulp = require('gulp');

var gulpTypescript = require('gulp-typescript');
var gulpSourcemaps = require('gulp-sourcemaps');

var del = require('del');

var appDev = 'assets/app/';
var appProd = 'public/js/app/';
var vendor = 'public/js/vendor';

var angularBundles = {
   'core': 'node_modules/@angular/core/bundles/core.umd.js',
   'common': 'node_modules/@angular/common/bundles/common.umd.js',
   'compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
   'browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
   'browserdynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
   'http': 'node_modules/@angular/http/bundles/http.umd.js',
   'router': 'node_modules/@angular/router/bundles/router.umd.js',
   'forms': 'node_modules/@angular/forms/bundles/forms.umd.js'
}

var tsconfig = gulpTypescript.createProject('tsconfig.json');

gulp.task('build-ts', function() {
    return gulp.src(appDev + '/**/*.ts')
        .pipe(gulpSourcemaps.init())
        .pipe(gulpTypescript(tsconfig))
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-copy', function() {
   return gulp.src([appDev + '**/*.html', appDev + '**/*.htm', appDev + '**/*.css'])
       .pipe(gulp.dest(appProd));
});

gulp.task('clean', function() {
   del(appProd + '/**/*');
});


gulp.task('bundles', function() {
    gulp.src(angularBundles.core)
        .pipe(gulp.dest(vendor + '/@angular'));
    gulp.src(angularBundles.common)
        .pipe(gulp.dest(vendor + '/@angular'));
    gulp.src(angularBundles.compiler)
        .pipe(gulp.dest(vendor + '/@angular'));
    gulp.src(angularBundles.browser)
        .pipe(gulp.dest(vendor + '/@angular'));
    gulp.src(angularBundles.browserdynamic)
        .pipe(gulp.dest(vendor + '/@angular'));
    gulp.src(angularBundles.http)
        .pipe(gulp.dest(vendor + '/@angular'));
    gulp.src(angularBundles.router)
        .pipe(gulp.dest(vendor + '/@angular'));
    gulp.src(angularBundles.forms)
        .pipe(gulp.dest(vendor + '/@angular'));

    return gulp.src('systemjs.config.js')
        .pipe(gulp.dest('/public/'));    

});


gulp.task('vendor', function() {
    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(vendor + '/reflect-metadata/'));


    //shim
    gulp.src('node_modules/core-js/client/shim.min.js')
        .pipe(gulp.dest(vendor + '/core-js/'));
    //rxjs
    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(vendor + '/rxjs/'));

    //systemjs
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(vendor + '/systemjs/'));

    //moment
    gulp.src('node_modules/moment/**')
        .pipe(gulp.dest(vendor + '/moment/'));

    //zonejs
    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(vendor + '/zone.js/'));
});

gulp.task('watch', function() {
   gulp.watch(appDev + '**/*.ts', ['build-ts']); 
   gulp.watch(appDev + '**/*.{html,htm,css}', ['build-copy']); 
});

gulp.task('default', ['watch', 'build-ts', 'build-copy', 'vendor', 'bundles']);
gulp.task('build', ['build-ts', 'build-copy', 'vendor', 'bundles']);