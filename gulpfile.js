// Came from https://qiita.com/7110/items/a9ea618f9b9c2687c949
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    src: {
        scss: 'scss/**/*.scss'
    },
    dist: {
        css: 'css/'
    }
};

gulp.task('sass', done => {
    gulp.src(paths.src.scss).pipe(sourcemaps.init()).pipe(sass({
        outputStyle: 'expanded',
    })).on('error', sass.logError).pipe(autoprefixer({
    })).pipe(sourcemaps.write()).pipe(gulp.dest(paths.dist.css)).pipe(
        cleanCss()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest(paths.dist.css));
    done();
});

gulp.task('dev', () => {
    gulp.watch(paths.src.scss, gulp.task('sass'));
});
