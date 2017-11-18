var gulp = require('gulp');

// var pkg = require('./package.json');



gulp.task('copy', function() {
    gulp.src([
        'bower_components/bootstrap/dist/**/*',
        '!**/npm.js',
        '!**/bootstrap-theme.*',
        '!**/*.map'
    ])
        .pipe(gulp.dest('app/scripts/vendor/bootstrap/dist'))

        

    gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('app/scripts/vendor/jquery/dist'))

        

        gulp.src(['bower_components/angular/*.js'])
        .pipe(gulp.dest('app/scripts/vendor/angular'))

    gulp.src(['bower_components/angularfire/dist/*.js'])
        .pipe(gulp.dest('app/scripts/vendor/angularfire/dist'))

        gulp.src(['bower_components/firebase/*.js'])
        .pipe(gulp.dest('app/scripts/vendor/firebase/'))

        gulp.src(['bower_components/angular-animate/*.js'])
        .pipe(gulp.dest('app/scripts/vendor/angular-animate'))

        gulp.src(['bower_components/angular-cookies/*.js'])
        .pipe(gulp.dest('app/scripts/vendor/angular-cookies'))

        gulp.src(['bower_components/angular-resource/*.js'])
        .pipe(gulp.dest('app/scripts/vendor/angular-resource'))

        gulp.src(['bower_components/angular-route/*.js'])
        .pipe(gulp.dest('app/scripts/vendor/angular-route'))

        gulp.src(['bower_components/angular-sanitize/*.js'])
        .pipe(gulp.dest('app/scripts/vendor/angular-sanitize'))

        gulp.src(['bower_components/angular-touch/*.js'])
        .pipe(gulp.dest('app/scripts/vendor/angular-touch'))

    gulp.src([
        'node_modules/font-awesome/**',
        '!node_modules/font-awesome/**/*.map',
        '!node_modules/font-awesome/.npmignore',
        '!node_modules/font-awesome/*.txt',
        '!node_modules/font-awesome/*.md',
        '!node_modules/font-awesome/*.json'
    ])
        .pipe(gulp.dest('app/scripts/vendor/font-awesome'))

   
})

gulp.task('default', ['copy']);