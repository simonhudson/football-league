// Gulp modules
var gulp        = require('gulp'),
    clean       = require('gulp-clean'),
    concat      = require('gulp-concat'),
    del         = require('del'),
    fs          = require('fs'),
    gutil       = require('gulp-util'),
    imagemin    = require('gulp-imagemin'),
    minifyCss   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-ruby-sass'),
    swig        = require('gulp-swig'),
    uglify      = require('gulp-uglify'),
    uncss       = require('gulp-uncss'),
    watch       = require('gulp-watch');

// Define directory structure
var src = {};
    src.root        = 'src/';
    src.assets      = src.root + 'assets/';
    src.css         = src.assets + 'css/';
    src.data        = src + 'data/';
    src.fonts       = src.assets + 'fonts/';
    src.imgs        = src.assets + 'imgs/';
    src.js          = src.assets + 'js/';
    src.libs        = src.assets + 'libs/';
    src.pages       = src.root + 'pages/';
    src.partials    = src.root + 'partials/';
    src.templates   = src.root + 'templates/';
var dist = {};
    dist.root    = 'dist/';
    dist.assets  = dist.root + 'assets/';
    dist.css     = dist.assets + 'css/';
    dist.data    = dist + 'data/';
    dist.fonts   = dist.assets + 'fonts/';
    dist.imgs    = dist.assets + 'imgs/';
    dist.js      = dist.assets + 'js/';
    dist.libs    = dist.assets + 'libs/';
var watch = {};
    watch.css         = src.assets + 'css/**/*.{scss,css}';
    watch.fonts       = src.assets + 'fonts/';
    watch.imgs        = src.assets + 'imgs/**/*.{gif,jpg,jpeg,png,svg}';
    watch.js          = src.assets + 'js/**/*.js';
    watch.libs        = src.assets + 'libs/**/*.{js,css}';
    watch.pages       = src.root + 'pages/**/*.{swig,json}';
    watch.partials    = src.root + 'partials/**/*.swig';
    watch.templates   = src.root + 'templates/**/*.swig';

/***
Clean dist
***/
gulp.task('clean', ['clean_css','clean_imgs','clean_js','clean_html']);

gulp.task('clean_css', function() {
    gulp.src(dist.css + '**/*.css')
        .pipe(clean());
});
gulp.task('clean_imgs', function() {
    gulp.src(dist.imgs + '**/*.{gif,jpg,jpeg,png,svg}')
        .pipe(clean());
});
gulp.task('clean_js', function() {
    gulp.src(dist.js + '**/*.js')
        .pipe(clean());
});
gulp.task('clean_html', function() {
    gulp.src(dist.root + '**/*.html')
        .pipe(clean());
});

/***
Swig
***/
gulp.task('swig', function() {
    var opts = {
        load_json: true,
        defaults: {cache: false},
        data: require('./' + src.pages + 'global')
    };

    return gulp.src(src.pages + '**/*.swig')
        .pipe(swig(opts))
        .pipe(gulp.dest(dist.root));

});

/***
Sass -> CSS
***/
gulp.task('sass', function() {
    return sass(src.css + 'main.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(rename('main.css'))
        .pipe(gulp.dest(dist.css));
});
/***
Minify CSS
***/
gulp.task('minifycss', ['uncss'], function() {
    gulp.src(dist.css + 'main.css')
        .pipe(rename('main.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(dist.css));
});
/***
Un-CSS
***/
gulp.task('uncss', ['sass'], function () {
    // return gulp.src(dist.css + '*.css')
    //     .pipe(uncss({
    //         html: ['./' + dist.root + '*.html']
    //     }))
    //     .pipe(gulp.dest(dist.css));
});

/**
Minify images
***/
gulp.task('imagemin', function () {
    return gulp.src(src.imgs + '**/*.{gif,jpg,jpeg,png,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest(dist.imgs));
});

/**
Copy data
**/
gulp.task('copydata', function () {
    return gulp.src(src.data + '**/*.json')
        .pipe(gulp.dest(dist.data));
});

/***
Concatenate JS
***/
gulp.task('concatjs', function() {
    return gulp.src([src.js +'/services/*.js', src.js +'/modules/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(dist.js));
});

/***
Minify JS
***/
gulp.task('minifyjs', ['concatjs'], function() {
    return gulp.src(dist.js + 'main.js')
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist.js));
});

gulp.task(
    'default', [
        'clean',
        'swig',
        'minifycss',
        'minifyjs',
        'imagemin',
        'copydata'
    ]
);

gulp.task('serve', ['default'], function () {
    gutil.log('Initiating watch');
    gulp.watch(watch.css, { interval: 1000 }, ['default']);
    gulp.watch(watch.js, { interval: 1000 }, ['default']);
    gulp.watch(watch.imgs, { interval: 1000 }, ['default']);
    gulp.watch(watch.pages, { interval: 1000 }, ['default']);
    gulp.watch(watch.partials, { interval: 1000 }, ['default']);
    gulp.watch(watch.templates, { interval: 1000 }, ['default']);
});