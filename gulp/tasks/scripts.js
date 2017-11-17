const gulp        = require('gulp');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const browserSync = require('browser-sync');
const sourcemaps  = require('gulp-sourcemaps');

/*
 * Comple files from scripts into both _site/assets/ (live injeciting) & site (for future jekyll builds)
 */

gulp.task('scripts', function() {
  return gulp.src([
    './node_modules/smooth-scroll/dist/js/smooth-scroll.polyfills.min.js',
    'docs/_assets/_scripts/**/*.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/assets/scripts'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('docs/assets/scripts/'));
});



/**
 * Compile files from _js into both _site/js (for live injecting) and site (for future jekyll builds)
 */
gulp.task('scripts-prod', function() {
  return gulp.src([
    './node_modules/smooth-scroll/dist/js/smooth-scroll.polyfills.min.js',
    'docs/_assets/_scripts/**/*.js'
  ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/scripts/'))
    .pipe(gulp.dest('docs/assets/scripts/'));
});
