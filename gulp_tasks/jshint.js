const gulp = require('gulp'),
    jshint = require('gulp-jshint');

// module that exports a function
// pipe is a node method, not gulp
// start path with ! to exclude
module.exports = () => gulp.src(['./src/**/*.js', '!./src/vendor/**/*.js'])
                            .pipe(jshint('./config/.jshintrc'))
                            .pipe(jshint.reporter(require('jshint-stylish')));