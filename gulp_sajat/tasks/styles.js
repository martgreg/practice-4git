var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function(){

    //return, mert assincronic function??  //gulp.src('#')
    return gulp.src('./app/assets/styles/styles.css')
    
    //postcss pipe ++ autoprefixer ++ cssvars ++nested ++cssimport!!elején
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))

    //ha error van a gulp nem áll le:
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })

    //pipe() + dest()
    .pipe(gulp.dest('./app/temp/styles'));
});