const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./gulp/tasks');

const pug_task = tasks.pug;
const copy_css_task = tasks.copy_css;
const inline_css_task = tasks.inline_css;

exports.watch = () => {
    gulp.watch('./src/**/*.pug', gulp.series(
        pug_task,
        copy_css_task,
        inline_css_task,
    ));
    gulp.watch('./src/**/*.css', gulp.series(
        pug_task,
        copy_css_task,
        inline_css_task,
    ));
}

exports.build = gulp.series(
    pug_task,
    copy_css_task,
    inline_css_task,
);