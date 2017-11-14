const gulp = require('gulp');


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(
    [
      'docs/_assets/_styles/_sass/**/*.scss',
      'docs/_assets/_styles/**/*.scss',
      'docs/_assets/_styles/_sass/**/*.sass',
      'docs/_assets/_styles/**/*.sass'
    ], ['sass']);

  gulp.watch(
    [
      'docs/_assets/_scripts/**/*.js'
    ], ['scripts']);

  gulp.watch(
    [
      'docs/**/*.txt',
      'docs/**/*.html',
      'docs/_layouts/**/*.html',
      'docs/_includes/**/*.html',
      'docs/assets/img/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG,gif,GIF,webp,WEBP,tif,TIF}',
      'docs/_assets/images/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG,gif,GIF,webp,WEBP,tif,TIF}'
    ], ['jekyll-rebuild']);
});
