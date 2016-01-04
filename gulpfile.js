// Gulp modules
var gulp        = require('gulp'),
    del         = require('del'),
    gutil       = require('gulp-util'),
    swig        = require('gulp-swig'),
    watch       = require('gulp-watch');

// Define directory structure
var src = {};
    src.root    = 'src/';
    src.assets  = src.root + 'assets/';
    src.css     = src.assets + 'css/';
    src.fonts   = src.assets + 'fonts/';
    src.imgs    = src.assets + 'imgs/';
    src.js      = src.assets + 'js/';
    src.libs    = src.assets + 'libs/';
var dist = {};
    dist.root    = 'dist/';
    dist.assets  = dist.root + 'assets/';
    dist.css     = dist.assets + 'css/';
    dist.fonts   = dist.assets + 'fonts/';
    dist.imgs    = dist.assets + 'imgs/';
    dist.js      = dist.assets + 'js/';
    dist.libs    = dist.assets + 'libs/';

// Set the environment
var Env = {
    isDev: gutil.env.dev,
    isProd: gutil.env.prod
};

/***
Clean dist
***/
gulp.task('clean', ['delete_css','delete_js','delete_imgs']);

gulp.task('delete_css', function() {
    del(dist.css + '*.css');
});
gulp.task('delete_js', function() {
    del(dist.js + 'application.js');
    del(dist.js + 'application.min.js');
});
gulp.task('delete_imgs', function() {
    del(dist.imgs + '**/*.{gif,jpg,jpeg,png,svg}');
});

/***
Sass -> CSS
***/
// gulp.task('sass', ['iesass', 'ie9sass', 'ie8sass'], function() {
//     return sass(config.src.css + 'application.css.scss')
//         .on('error', function (err) {
//             console.error('Error!', err.message);
//         })
//         .pipe(rename('application.css'))
//         .pipe(gulp.dest(config.dist.css));
// });

// gulp.task('iesass', function () {
//     return sass(config.src.css + 'ie.css.scss')
//         .on('error', function (err) {
//             console.error('Error!', err.message);
//         })
//         .pipe(rename('ie.css'))
//         .pipe(gulp.dest(config.dist.css));
// });
// gulp.task('ie9sass', function () {
//     return sass(config.src.css + 'ie-9.css.scss')
//         .on('error', function (err) {
//             console.error('Error!', err.message);
//         })
//         .pipe(rename('ie-9.css'))
//         .pipe(gulp.dest(config.dist.css));
// });
// gulp.task('ie8sass', function () {
//     return sass(config.src.css + 'ie-8.css.scss')
//         .on('error', function (err) {
//             console.error('Error!', err.message);
//         })
//         .pipe(rename('ie-8.css'))
//         .pipe(gulp.dest(config.dist.css));
// });

// /***
// Un-CSS
// ***/
// gulp.task('uncss', ['sass'], function () {
//     return gulp.src(config.dist.css + '*.css')
//         .pipe(uncss({
//             html: ['./*.{html,php}']
//         }))
//         .pipe(gulp.dest(config.dist.css));
// });

// /***
// Minify CSS
// ***/
// gulp.task('minifycss', ['csslint'], function() {
//     gulp.src(config.dist.css + 'application.css')
//         .pipe(rename('application.min.css'))
//         .pipe(minifyCss())
//         .pipe(gulp.dest(config.dist.css));
//     gulp.src(config.dist.css + 'ie.css')
//         .pipe(rename('ie.min.css'))
//         .pipe(minifyCss())
//         .pipe(gulp.dest(config.dist.css));
//     gulp.src(config.dist.css + 'ie-9.css')
//         .pipe(rename('ie-9.min.css'))
//         .pipe(minifyCss())
//         .pipe(gulp.dest(config.dist.css));
//     gulp.src(config.dist.css + 'ie-8.css')
//         .pipe(rename('ie-8.min.css'))
//         .pipe(minifyCss())
//         .pipe(gulp.dest(config.dist.css));
// });

// /***
// Lint complied CSS
// ***/
// gulp.task('csslint', ['sass'], function() {
//     return gulp.src(config.dist.css + 'application.css')
//         .pipe(csslint())
//         .pipe(csslint.reporter(cssLintReporter));
// });

// var cssLintReporter = function(file) {
//     gutil.log(gutil.colors.yellow('CSS Lint: ' + file.csslint.errorCount + ' errors') + ' in ' + gutil.colors.magenta(file.path));

//     file.csslint.results.forEach(function(result) {
//         gutil.log(gutil.colors.yellow('Line ' + result.error.line + ': ') + result.error.message);
//     });
// };

// /***
// Concatenate JS
// ***/
// gulp.task('concatjs', ['deljs'], function() {
//     return gulp.src(config.src.js +'/**/*.js')
//         .pipe(concat('application.js'))
//         .pipe(gulp.dest(config.dist.js));
// });

// /***
// Minify JS
// ***/
// gulp.task('minifyjs', ['jshint'], function() {
//     return gulp.src(config.dist.js + 'application.js')
//         .pipe(rename('application.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest(config.dist.js));
// });

// /***
// JS hint
// ***/
// gulp.task('jshint', ['concatjs'], function() {
//     return gulp.src(config.dist.js + 'application.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter());
// });

// /**
// Minify images
// ***/
// gulp.task('imagemin', ['delimgs'], function () {
//     return gulp.src(config.src.imgs + '**/*.{gif,jpg,jpeg,png,svg}')
//         .pipe(imagemin())
//         .pipe(gulp.dest(config.dist.imgs));
// });

gulp.task(
    'default', [
        'clean',
        // 'minifycss',
        // 'minifyjs',
        // 'imagemin'
    ]
);

// gulp.task('serve', ['default'], function () {
//     gutil.log('Initiating watch');
//     gulp.watch(src.css, { interval: 1000 }, ['default']);
//     gulp.watch(src.js, { interval: 1000 }, ['default']);
//     gulp.watch(src.imgs, { interval: 1000 }, ['default']);
// });