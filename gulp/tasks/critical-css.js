var gulp     = require('gulp');
var critical = require('critical');


/*
 * Gather the critical CSS for fast DOM paint
 */
gulp.task('critical', ['scripts-prod', 'sass-prod'], function(cb) {
  critical.generate({
    inline: false,
    base: 'docs/',
    src: 'index.html',
    css: 'docs/assets/styles/main.css',
    dest: '_includes/critical-css/critical.css',
    minify: true,
    extract: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});
