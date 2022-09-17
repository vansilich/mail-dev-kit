const {src, dest} = require('gulp');
const pug = require('gulp-pug');

module.exports = () => {
    return src('./src/*.pug')
        .pipe(pug({

        }))
        .pipe(dest('./ready-to-send/'));
}