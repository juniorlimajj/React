var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var reactEasy = require('gulp-react-easy');

gulp.task('default',['w','js']);

gulp.task('js',function(){
    return reactEasy({
        file: './src/js/app.jsx',
        debug: true
    })
    .to('app.js')
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('w',function(){
    gulp.watch('./src/js/**/*',['js']);
});
