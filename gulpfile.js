const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const imggemin = require('gulp-imagemin');
gulp.task('sass', () => {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
});
gulp.task('es6', () => {
    gulp.src('./src/js/se6/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./src/js/es5'));
});
gulp.task('es5', () => {
    gulp.src('./src/js/es5/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./dist/js'))
});
gulp.task('img', () => {
    gulp.src('./src/img/*')
        .pipe(imggemin())
        .pipe(gulp.dest('./dist/img'))
});
gulp.task('default',()=>{
    gulp.watch('./src/sass/*.scss');
    gulp.watch('./src/js/se6/*.js');
    gulp.watch('./src/js/es5/*.js');
    gulp.watch('./src/img/*',['img']);
});
