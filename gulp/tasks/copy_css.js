const {src, dest} = require('gulp');

module.exports = () => {
    return src('./src/css/inline.css')
        .pipe(dest('./ready-to-send/css/'))
}