var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');



// pug compile

gulp.task('html', function(){
    return gulp.src('project/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());

});

// sass compile and complete prefixes

gulp.task('css', function(){
    return gulp.src('project/style/main.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/style'))
    .pipe(connect.reload());
});

// js compile

gulp.task('javascript', function(){
    return gulp.src('project/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
});

// connect server

gulp.task('connect', function(){
    connect.server({
    root: 'dist',
    livereload: true
    });
});

// watch task

gulp.task('watch', function () {
    
    gulp.watch(['project/index.pug', 'project/pugs/**/*.pug'], gulp.series('html'));
    gulp.watch(['project/style/main.sass' , 'project/style/sass/**/*.sass'], gulp.series('css'));
    gulp.watch(['project/js/*.js'], gulp.series('javascript'));

});

// run all task in watch

gulp.task('run', gulp.parallel('connect', 'watch'));
