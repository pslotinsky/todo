const browserSync = require('browser-sync').create();

module.exports = {
    start() {
        return () => {
            browserSync.init({
                server: {
                    baseDir: "./public"
                }
            });
        };
    },
    restart() {
        return () => {
            browserSync.reload();
        };
    }
};

