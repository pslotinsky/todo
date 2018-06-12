const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify-es').default;

module.exports = function(env) {
    return () => {
        const isProd = (env == 'PROD');
        return browserify({
                basedir: '.',
                entries: ['dist/main.js'],
                cache: {},
                packageCache: {}
            })
            .bundle()
            .pipe(source('scripts.js'))
            .pipe(gulpif(isProd, buffer()))
            .pipe(gulpif(isProd, uglify()))
            .pipe(gulp.dest('public'));
    };
};
