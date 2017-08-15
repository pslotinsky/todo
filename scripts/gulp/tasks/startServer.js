const gulp = require('gulp');
const browserSync = require('browser-sync');

const Path = require('../utils/Path');
 
module.exports = function() {
    browserSync({
        server: Path.STATIC
    });
};
