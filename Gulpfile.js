/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 14:09
 */

/****************************************
 * define some constants
 */
const DEBUG = (process.env.NODE_ENV === 'debug');
const CI = (process.env.CI === 'true');


/****************************************
 * load gulp and plugins
 */
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var mocha = plugins.spawnMocha; // we use a alternative mocha implementation to execute a mocha setup file first


/****************************************
 * define file paths
 */
var paths = {
    scripts: {
        test: [
            'test/**/*.spec.js'
        ],
        lint: [
            'src/**/*.js'
        ],
        watch: [
            'src/**/*.js'
        ]
    }
};


/****************************************
 * define test tasks
 */
gulp.task('test', ['test-js']);

gulp.task('test-js', function () {
    return gulp.src(paths.scripts.test, {read: false})
        .pipe(mocha({
            debugBrk: DEBUG,
            r: 'test/setup.js',
            R: CI ? 'spec' : 'nyan',
            istanbul: !DEBUG
        }));
});


/****************************************
 * define eslint tasks
 */
gulp.task('lint', function () {
    return gulp.src(paths.scripts.lint)
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(plugins.eslint({
            useEslintrc: true
        }))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(plugins.eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(plugins.eslint.failOnError())
    ;
});


/****************************************
 * watcher tasks
 */
gulp.task('watch', function () {
    gulp.watch(paths.scripts.test, ['test-js']);
    gulp.watch(paths.scripts.watch, ['test-js']);
});


/****************************************
 * default tasks
 */
gulp.task('default', ['test', 'lint']);
