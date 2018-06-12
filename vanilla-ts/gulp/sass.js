const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');
const cleanCSS = require('gulp-clean-css');

module.exports = function(env) {
    return () => {
        const isProd = (env == 'PROD');
        const sassConfig = isProd ? { outputStyle: 'compressed' } : {};
        const src = [
            './node_modules/normalize.css/normalize.css',
            './src/**/*.scss',
            './dist/**/*.scss'
        ];
        return gulp.src(src)
            .pipe(sass(sassConfig).on('error', sass.logError))
            .pipe(concat('styles.css'))
            .pipe(gulpif(isProd, cleanCSS()))
            .pipe(gulp.dest('./public'));
    };
};
