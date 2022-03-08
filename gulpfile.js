
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));


function build() {
    return gulp.src('**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(function (file) {
        return file.base;
    }));
};

exports.build = build;
