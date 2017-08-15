const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const requiredir = require('requiredir');

const Task = requiredir('./tasks');

gulp.task('scripts', Task.buildBundle);
gulp.task('server', Task.startServer);

gulp.task('default', gulpSequence('scripts'));
gulp.task('start', gulpSequence('default', 'server'));
