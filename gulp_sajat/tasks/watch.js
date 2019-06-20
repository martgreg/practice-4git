var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


//gulp-watch feladatok -- amikor egy ilyen lefut, az a fenti fladatok egyikét hívja működésbe
gulp.task('watch', function(){

    //miniszervert futtat a gépen - felállítunk egy szervert-, és megmutatjuk, hol vannak a file-ok amiket automatikusan szinkronizálni akaruk
    browserSync.init({
        //a weblapnál nem jelenik meg notifikáció frissítéskor
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    //watch függvény ( 'file, amit nézni karunk', 'mit csináljon()' )
    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });

});

//gulp-browser-sinc feladat --css inject
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')

    .pipe(browserSync.stream());
});