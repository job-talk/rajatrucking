var browserSync = require('browser-sync'),
    cp          = require('child_process');

var gulp        = require('gulp'),
    prefix      = require('gulp-autoprefixer'),
    sass        = require('gulp-sass');


var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var sassFile = 'assets/css/styles.scss';


/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('styles', function () {
  return gulp.src(sassFile)
    .pipe(sass({
      outputStyle: 'compressed',
      onError: browserSync.notify(messages.sassError)
    }))


    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: true
    }))

    .pipe(gulp.dest('_site/assets/styles'))
    .pipe(browserSync.reload({ stream:true }))
    .pipe(gulp.dest('assets/css'));
});


/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);

  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
    .on('close', done);
});


/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});


/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['styles', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(
    [
      '_sass/*.scss',
      '_sass/**/*.scss',
      'assets/css/*.scss',
      'assets/css/**/*.scss',
      '_includes/css/*.css'
    ], ['styles']);

  gulp.watch(
    [
      'assets/js/*.js',
      'assets/js/**/*.js'
    ]);

  gulp.watch(
    [
      '*.html',
      '_layouts/*.html',
      '_includes/*.html',
      '_inludes/**/*.html'
    ], ['jekyll-rebuild']);

  browserSync.reload({ reloadDelay: 5000 });
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
