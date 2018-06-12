const gulp = require('gulp');
const fs = require('fs');
const inline = require('gulp-inline');

module.exports = function(env) {
    function clean(path) {
        let module = require.cache[require.resolve(path)];
        if (module) {
            if (module.children) {
                module.children.forEach(child => clean(child.filename));
            }
            delete require.cache[require.resolve(path)];
        }
    }

    return () => {
        clean('../dist/main');
        const AppTemplate = require('../dist/main');
        const html = AppTemplate.render();
        fs.writeFileSync('./dist/index.html', html)

        return gulp.src('./dist/index.html')
            .pipe(inline({
                base: 'public/',
                disabledTypes: ['img', 'js', 'css']
            }))
            .pipe(gulp.dest('./public'));
    };
};
