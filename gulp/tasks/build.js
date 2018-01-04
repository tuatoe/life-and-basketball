var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
     browserSync.init({
        notify: false,
        server:{
            baseDir: 'docs'
        }    
    });
     
});

//delete dist folder
//include icon after as a dependent ['icons'] after deleteDistFolder
gulp.task('deleteDistFolder',function(){
   return del('./docs') 
});


gulp.task('copyGeneralFiles',['deleteDistFolder'], function(){
    var pathsToCopy = [
        './app/**/*',
        '!./app/**/*',
        '!./app/assets/images/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ]
   return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./docs'));
});

//copy all the image files to the dist folder 
gulp.task('optimizeImages',['deleteDistFolder'],function(){
    return gulp.src(['./app/assets/images/**/*'])
    .pipe(imagemin({
        //optimize jpg images
        progressive: true,
        //optimize gif images
        interlaced: true,
        //optimize svg files
        multipass: true
        
    }))
    .pipe(gulp.dest('./docs/assets/images'));
})

//copy css and js files
//usemin will minify file and revision them
//copy to dist folder
//compress file-size
//revision file
gulp.task('useminTriger', ['deleteDistFolder'], function(){
    gulp.start('usemin');
});

gulp.task('usemin',['styles','scripts'],function(){
    return gulp.src('./app/**/*')
        .pipe(usemin({
        css:[function(){return rev()}, function(){return cssnano()}]
        //js: [function(){return rev()}, function(){return uglify()}]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build',['deleteDistFolder','copyGeneralFiles','optimizeImages','useminTriger']);