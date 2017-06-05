var gulp = require("gulp");
var fs = require("fs");
var browserify = require("browserify");
var vueify = require("vueify");
var sass = require("gulp-sass");

gulp.task('vue', function() {
    return browserify("./resources/js/app.js")
        .transform(vueify)
        .bundle()
        .pipe(fs.createWriteStream("./public/hypegame.js"))
});

gulp.task('sass', function() {
    return gulp.src('./resources/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['vue', 'sass'], function() {
    gulp.watch('./resources/js/*.js', ['vue']);
    gulp.watch('./resources/sass/*.scss', ['sass']);
});
