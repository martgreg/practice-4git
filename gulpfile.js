var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');




//gulp feladatok
gulp.task('default', function(){
    console.log("Gulp használatban!");
});

gulp.task('html', function(){
    console.log("A html file módosítását észleltem!");
});

gulp.task('styles', function(){

    //return, mert assincronic function??  //gulp.src('#')
    return gulp.src('./app/assets/styles/styles.css')
    
    //postcss pipe ++ autoprefixer ++ cssvars ++nested
    .pipe(postcss([cssvars, nested, autoprefixer]))

    //pipe() + dest()
    .pipe(gulp.dest('./app/temp/styles'));
});




//gulp-watch feladatok -- amikor egy ilyen lefut, az a fenti fladatok egyikét hívja működésbe
gulp.task('watch', function(){

    //watch függvény ( 'file, amit nézni karunk', 'mit csináljon()' )
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });

});