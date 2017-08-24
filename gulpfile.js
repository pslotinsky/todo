'use strict';

var gulp        = require('gulp'),
    typescript  = require('typescript'),
    ts          = require('gulp-typescript'),
    browserify  = require('browserify'),
    babelify    = require('babelify'),
    source      = require('vinyl-source-stream');

var project = ts.createProject('./tsconfig.json', {
    typescript: typescript
});

gulp.task('compile', function() {
    var result = gulp
        .src('src/**/*{ts,tsx}')
        .pipe(project());
        
    return result.js.pipe(gulp.dest('dist'));
});

gulp.task('bundle', ['compile'], function() {
    return  browserify('dist/front/client.js')
        .transform(babelify.configure({
            presets: ["es2015"]
        }))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public'));
});
