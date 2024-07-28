const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function comprimeIMG() {
    return gulp.src('./source/images/*', {encoding: false})
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}
function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compiladorSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))
}



exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compiladorSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJS));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeIMG));
}
