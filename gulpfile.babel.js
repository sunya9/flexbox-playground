import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulpLoadPlugins from 'gulp-load-plugins';

var $ = gulpLoadPlugins();


gulp.task('js', () => {
  var b = browserify({
    entries: 'src/js/app.js',
    debug: process.env.NODE_ENV === 'production',
    transform: babelify
  });
  return b.bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe($.eslint.format())
  .pipe($.uglify())
  .pipe(gulp.dest('dist/js/'));
});


gulp.task('watch', ['serve'], () => {
   gulp.watch('src/**/*.html', ['html']);
  return gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('deploy', () => {
  return gulp.src('./dist/**/*')
  .pipe($.ghPages());
});

gulp.task('html', () => {
    var options = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('src/**/*.html')
    .pipe($.minifyHtml(options))
    .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function() {
  gulp.src('dist/')
    .pipe($.webserver({
      livereload: true,
      open: true,
      fallback: true,
    }));
});

gulp.task('build', ['html', 'js']);

gulp.task('default', ['build']);