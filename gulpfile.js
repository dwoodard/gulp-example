var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssshrink = require('gulp-cssshrink');


gulp.task('css', function(){
    return gulp.src('css/style.css')
        .pipe(autoprefixer('last 20 versions'))
        .pipe(minifyCSS({keepBreaks:true,keepSpecialComments: '1',processImport:true}))
        .pipe(concat('all.css'))
        .pipe(cssshrink())
        .pipe(gulp.dest('css/min'))
});


gulp.task('watch', function(){
    gulp.watch('css/**/*.css', ['css']);
});

gulp.task('default', ['watch']);
