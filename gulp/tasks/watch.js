const gulp = require('gulp');


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(
    [
      'docs/_assets/_styles/_sass/**/*.scss',
      'docs/_assets/_styles/**/*.scss'
    ], ['sass']);

  gulp.watch(
    [
      'docs/_assets/_scripts/**/*.js'
    ], ['scripts']);

  gulp.watch(
    [
      '**/*.txt',
      '**/*.html',
      '_layouts/**/*.html',
      '_includes/**/*.html',
      'assets/img/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG,gif,GIF,webp,WEBP,tif,TIF}'
    ], ['jekyll-rebuild']);
});
