var gulp     = require('gulp');
var gutil    = require('gulp-util');
var critical = require('critical');


/*
 * Critical CSS for home/index
 */
gulp.task('critical-home', ['jekyll-dev'], function(cb) {
  critical.generate({
    base: 'docs/',
    src: 'index.html',
    css: ['docs/assets/styles/main.css'],
    dest: '_includes/critical-css/home-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  }, function (err, output) {
      console.log(err);
      console.log(output);
  });
});

// gulp.task('critical', function() {
//   return gulp.src(['/docs/**/*.html'])
//     .pipe(critical({
//       base: 'docs/',
//       inline: false,
//       minify: true,
//       width: 320,
//       height: 480,
//       css: ['assets/styles/main.css']
//     }))
//     .on('error', function(err) {
//        gutil.log(gutil.colors.red(err.message));
//     })
//     .pipe(gulp.dest('./_includes/critical/'));
// });

/*
 * Critical CSS for services
 */
gulp.task('critical-services', ['jekyll-dev'], function(cb) {
  critical.generate({
    //inline: true,
    base: '_site/',
    src: 'services/index.html',
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
    base: '_site/',
    src: '404.html',
    css: ['assets/styles/main.css'],
    dest: '_includes/critical-css/404-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});
