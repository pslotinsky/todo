const webpack = require('webpack');
const gutil = require('gulp-util');

const Path = require('../utils/Path');

module.exports = function buildBundle() {
    const config = {
        entry: Path.SRC,
        module: {
            loaders: [{
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
                }
            }]
        },
        output: {
            path: Path.STATIC_JS,
            filename: 'bundle.js'
        }
    };

    return new Promise((resolve, reject) => {
        webpack(config, (err, stats) => {
            if (err)  {
                reject(err);
            }

            gutil.log(stats.toString({
                modules: false,
                colors: true
            }));
            
            resolve();
        });
    });
};
