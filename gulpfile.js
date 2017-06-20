const webpack = require('gulp-webpack');
var gulp = require('gulp');
var gulpIf = require('gulp-if');
var rename = require("gulp-rename");
var injectString = require('gulp-inject-string');
var inject = require('gulp-inject');
var args = require('get-gulp-args')();
var path = require('path');
var fs = require('fs');

var now = require('microtime-nodejs').now();

if (!args.env) {
    args.env = process.env.NODE_ENV = "development";
} else {
    process.env.NODE_ENV = args.env;
}

gulp.task('webpack', [], () => {
    return gulp.src('')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('../dist'));
});

var pagesPath = path.resolve(__dirname, "./client/pages");
var pages = fs.readdirSync(pagesPath);
if (pages.indexOf(".DS_Store") != -1) {
    pages.splice(pages.indexOf(".DS_Store"), 1);
}

for (var i=0; i<pages.length; i++) {
    var afterInjection;
    var page = pages[i];
    var url = './server/views/' + page + '.ejs';

    if (i == 0) {
        afterInjection = ['webpack'];
    } else {
        afterInjection = ['rename-' + pages[i - 1]];
    }

    pageRun(page, afterInjection, url);
}

function pageRun (page, afterInjection, url) {
    gulp.task('injection-' + page, afterInjection, () => {
        var src = gulp.src(url);
        var source = gulp.src([
            '../dist/sg-' + page + '.js'
        ], {read: false});

        return src.pipe(inject(source))
            .pipe(injectString.replace('../dist/sg-' + page + '.js', 'sg-' + page + '.js?v=' + now))
            .pipe(gulp.dest('./server/views/dist'));
    });

    gulp.task('rename-' + page, ['injection-' + page], () => {
        return gulp.src("./server/views/dist/" + page + ".ejs")
            .pipe(rename("./" + page + "-" + args.env + ".ejs"))
            .pipe(gulp.dest("./server/views"));
    });
}

gulp.task('webpack-watch', ['rename-' + pages[pages.length - 1]], () => {
    var webpackconfig = require('./webpack.config.js');
    if (args.env == 'development') {
        webpackconfig.watch = true;
    }
    return gulp.src('')
        .pipe(gulpIf(args.env == 'development', webpack(webpackconfig)))
        .pipe(gulp.dest('../dist'));
});

gulp.task('build', ['webpack-watch']);