'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    typescript  = require('typescript'),
    ts          = require('gulp-typescript'),
    browserify  = require('browserify'),
    babelify    = require('babelify'),
    source      = require('vinyl-source-stream');

var project = ts.createProject('./tsconfig.json', {
    typescript: typescript
});

gulp.task('default', ['sass', 'bundle', 'watch']);

gulp.task('sass', () => {
    return gulp.src('./src/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('./styles.css'))
        .pipe(gulp.dest('./public'));
});

gulp.task('compile', function() {
    var result = gulp
        .src('src/**/*{ts,tsx}')
        .pipe(project());
        
    return result.js.pipe(gulp.dest('dist'));
});

gulp.task('bundle', ['compile'], function() {
    return browserify('dist/front/client.js')
        .transform(babelify.configure({
            presets: ['es2015', 'stage-0']
        }))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', ['bundle']);
});
