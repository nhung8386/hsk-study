const { src, dest, watch, series } = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

function htmlTask() {
  return src('src/pages/**/*.ejs', { base: 'src/pages' })
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(rename({ extname: '.html' }))
    .pipe(dest('dist'));
}

function watchFiles() {
  watch(['src/**/*.{ejs,js}'], htmlTask);
}

exports.html = htmlTask;
exports.watch = watchFiles;
exports.default = series(htmlTask, watchFiles);
// const htmlmin = require('gulp-htmlmin');

// function htmlTask() {
//   return src('src/pages/**/*.ejs', { base: 'src/pages' })
//     .pipe(ejs({}, {}, { ext: '.html' }))
//     .pipe(rename({ extname: '.html' }))
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(dest('dist'));
// }

// function watchFiles() {
//   watch(['src/**/*.{ejs,js}'], htmlTask);
// }

// exports.html = htmlTask;
// exports.watch = watchFiles;
// exports.default = series(htmlTask, watchFiles);