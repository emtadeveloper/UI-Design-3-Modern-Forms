const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

// compile Sass to Css

gulp.task("compile-sass", async function () {
  return gulp
    .src("./sass/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

// compile PUG to HTML

gulp.task("compile-pug", async function () {
  return gulp.src("./pug/*.pug").pipe(pug()).pipe(gulp.dest("./html/"));
});

//watch

gulp.task("watch", async function () {
  gulp.watch("/sass/style.scss", gulp.series("compile-sass"));
  gulp.watch("./pug/*.pug", gulp.series("compile-pug"));
});

//default

gulp.task("default", gulp.parallel("compile-sass", "compile-pug", "watch"));
