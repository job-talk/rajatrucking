var gulp     = require('gulp');
var critical = require('critical');


/*
 * Critical CSS for home/index
 */
gulp.task('critical', ['jekyll-prod'], function(cb) {
  critical.generate({
    inline: false,
    base: 'docs/',
    src: 'index.html',
    css: ['docs/assets/styles/main.css'],
    dest: '_includes/critical-css/critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});
