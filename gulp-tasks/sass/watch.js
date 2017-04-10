module.exports = function(gulp, callback) {
	return gulp.watch(config.source.sass+'/**/*.scss', ['sass-compile']);
};