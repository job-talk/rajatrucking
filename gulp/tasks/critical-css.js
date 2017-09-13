const gulp     = require('gulp');
const critical = require('critical');


/*
 * Critical CSS for home/index
 */
gulp.task('critical-home', ['jekyll-dev'], function(cb) {
  critical.generate({
    //inline: true,
    base: './',
    src: 'index.html',
    css: ['assets/styles/main.css'],
    dest: '_includes/critical-css/home-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});


/*
 * Critical CSS for chanting index
 */
gulp.task('critical-services', ['jekyll-dev'], function(cb) {
  critical.generate({
    //inline: true,
    base: '_site/',
    src: 'services.html',
    css: ['assets/styles/main.css'],
    dest: '_includes/critical-css/services-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});


/*
 * Critical CSS for chanting index
 */
gulp.task('critical-contact', ['jekyll-dev'], function(cb) {
  critical.generate({
    //inline: true,
    base: '',
    src: 'services.html',
    css: ['assets/styles/main.css'],
    dest: '_includes/critical-css/services-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});


/*
 * Critical CSS for 404
 */
gulp.task('critical-404', ['jekyll-dev'], function(cb) {
  critical.generate({
    //inline: true,
    base: '../../',
    src: '404.html',
    css: ['assets/styles/main.css'],
    dest: '_includes/critical-css/404-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});
