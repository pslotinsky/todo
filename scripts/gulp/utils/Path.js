const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');
const SRC = path.join(ROOT, 'src');
const STATIC = path.join(ROOT, 'public');
const STATIC_JS = path.join(STATIC, 'js');
const BUILD = path.join(ROOT, 'build');
const BUILD_JS = path.join(BUILD, 'js');

module.exports = {
    ROOT,
    SRC,
    STATIC,
    STATIC_JS,
    BUILD,
    BUILD_JS
};
