var gulp = require("gulp");
var fs = require("fs");
var browserify = require("browserify");
var vueify = require("vueify");
var sass = require("gulp-sass");

gulp.task('vue-frontend', function() {
    return browserify("./resources/js/frontend.js")
        .transform(vueify)
        .bundle()
        .pipe(fs.createWriteStream("./public/frontend.js"))
});

gulp.task('vue-backend', function() {
    return browserify("./resources/js/backend.js")
        .transform(vueify)
        .bundle()
        .pipe(fs.createWriteStream("./public/backend.js"))
});

gulp.task('sass', function() {
    return gulp.src('./resources/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['vue-frontend', 'vue-backend', 'sass'], function() {
    gulp.watch('./resources/js/*.js', ['vue-frontend', 'vue-backend']);
    gulp.watch('./resources/sass/*.scss', ['sass']);
});
