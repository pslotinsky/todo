const gulp = require('gulp');
const ts = require('gulp-typescript');

module.exports = function() {
    return () => {
        const tsProject = ts.createProject('tsconfig.json');
        return gulp.src('./src/**/*.ts')
            .pipe(tsProject())
            .pipe(gulp.dest('./dist'));
    };
}
