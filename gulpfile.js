const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyle() {
	return src("scss/**/**/*.scss")
		.pipe(sass())
		.pipe(purgecss({ content: ["*.html", "js/**/*.js"] }))
		.pipe(dest("css"));
}

function watchTask() {
	watch(["scss/**/**/*.scss", "*.html", "js/**/*.js"], buildStyle);
}

exports.default = series(buildStyle, watchTask);
