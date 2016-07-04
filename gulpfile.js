var gulp = require("gulp"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify')
; // gulp

/* =============================================================================
    CSS Files
============================================================================= */
gulp.task("styles", function() {
    return gulp.src([
            // Web Fonts
            "https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic",
            "https://fonts.googleapis.com/css?family=Raleway:700,400,300",
            "https://fonts.googleapis.com/css?family=Pacifico",
            "https://fonts.googleapis.com/css?family=PT+Serif",

            // Bootstrap core CSS
            "assets/bower_components/bootstrap/dist/css/bootstrap.min.css",

            // Plugins
            "assets/bower_components/font-awesome/css/font-awesome.min.css",
            "assets/the_project/fonts/fontello/css/fontello.css",
            "assets/the_project/plugins/magnific-popup/magnific-popup.css",
            "assets/the_project/plugins/rs-plugin/css/settings.css",
            "assets/the_project/css/animations.css",
            "assets/the_project/plugins/owl-carousel/owl.carousel.css",
            "assets/the_project/plugins/owl-carousel/owl.transitions.css",
            "assets/the_project/plugins/hover/hover-min.css",
            "assets/the_project/plugins/morphext/morphext.css",

            // The Project core CSS file
            "assets/the_project/css/style.css",
            // Color Scheme (In order to change the color scheme, replace the blue.css with the color scheme that you prefer)
            "assets/the_project/css/skins/red.css",

            // Custom CSS
            "assets/the_project/css/custom.css",
            "assets/css/leemtek.css"
        ])
        .pipe(concat('styles.min.css'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/dist/styles.min.css'));
});

/* =============================================================================
    JavaScript files placed at the end of the document so the pages load faster
============================================================================= */
gulp.task("scripts", function() {
    return gulp.src([
            // Jquery and Bootstap core js files
            "assets/the_project/plugins/jquery.min.js",
            "assets/bower_components/bootstrap/dist/js/bootstrap.min.js",

            // Modernizr javascript
            "assets/the_project/plugins/modernizr.js",

            // jQuery Revolution Slider
            "assets/the_project/plugins/rs-plugin/js/jquery.themepunch.tools.min.js",
            "assets/the_project/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js",

            // Isotope javascript
            "assets/the_project/plugins/isotope/isotope.pkgd.min.js",

            // Magnific Popup javascript
            "assets/the_project/plugins/magnific-popup/jquery.magnific-popup.min.js",

            // Appear javascript
            "assets/the_project/plugins/waypoints/jquery.waypoints.min.js",

            // Count To javascript
            "assets/the_project/plugins/jquery.countTo.js",

            // Parallax javascript
            "assets/the_project/plugins/jquery.parallax-1.1.3.js",

            // Contact form
            "assets/the_project/plugins/jquery.validate.js",

            // Morphext
            "assets/the_project/plugins/morphext/morphext.min.js",

            // Background Video
            "assets/the_project/plugins/vide/jquery.vide.js",

            // Owl carousel javascript
            "assets/the_project/plugins/owl-carousel/owl.carousel.js",

            // SmoothScroll javascript
            "assets/the_project/plugins/jquery.browser.js",
            "assets/the_project/plugins/SmoothScroll.js",

            // Initialization of Plugins
            "assets/the_project/js/template.js",

            // Custom Scripts
            "assets/the_project/js/custom.js"
        ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/dist/scripts.min.js'));
});

gulp.task('clean', function () {
    return gulp.src("assets/dist", {read: false})
        .pipe(clean());
});

/* =============================================================================
    AngularjS Components
============================================================================= */
gulp.task("scripts-angular", function() {
    return gulp.src([
            "assets/bower_components/angular/angular.min.js",
            "assets/bower_components/angular-recaptcha/release/angular-recaptcha.min.js",
            "assets/js/angular/app.js",
            "assets/js/angular/services.js",
            "assets/js/angular/controllers.js"
        ])
        .pipe(concat('angular-scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/dist/angular-scripts.min.js'));
});

/* =============================================================================
    Start Tasks
============================================================================= */
gulp.task('default', [], function() {
    gulp.start("styles", "scripts", "scripts-angular");
});
