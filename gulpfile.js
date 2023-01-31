const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
("use strict");

function buildStyles() {
  return gulp
    .src(["./src/styles/*/*.scss", "./src/styles/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./src/styles"));
}
exports.default = buildStyles;
