const { src, dest } = require('gulp');

// Configuration
const path = require('../config/path.js');
const app = require('../config/app.js');
const plugins = require('../config/plugins.js');

// Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');

// IMG handle
const img = () => {
    return src(path.img.src)
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(imagemin(plugins.imagemin))
        .pipe(dest(path.img.dest));
};

module.exports = img;
