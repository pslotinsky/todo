const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const argv = require('yargs').argv;
const sass = require('./gulp/sass');
const ts = require('./gulp/ts');
const bundle = require('./gulp/bundle');
const html = require('./gulp/html');
const server = require('./gulp/server');

gulp.task('sass', sass(argv.env));
gulp.task('ts', ts());
gulp.task('bundle', ['ts'], bundle(argv.env));
gulp.task('html', ['bundle'], html());
gulp.task('default', gulpSequence(['sass', 'html']));

gulp.task('start', server.start());
gulp.task('restart', server.restart());
gulp.task('watch', function() {
    gulp.watch('./src/**/*.ts', () => gulpSequence('html', 'restart')());
    gulp.watch('./src/**/*.scss', () => gulpSequence('sass', 'restart')());
});
gulp.task('dev', ['default'],  gulpSequence(['start', 'watch']));
