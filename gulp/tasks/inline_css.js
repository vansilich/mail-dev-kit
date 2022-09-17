const {src, dest} = require('gulp');
const inline_css = require('gulp-inline-css');

module.exports = () => {
    return src('./ready-to-send/*.html')
        .pipe(inline_css({
            applyStyleTags: false,
            removeLinkTags: true
        }))
        .pipe(dest('./ready-to-send/'))
}