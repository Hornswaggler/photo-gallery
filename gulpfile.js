'use strict';

var gulp = require('gulp');
var config = require('./gulp.config')();

var $ = require("gulp-load-plugins")({
	pattern:['gulp-*','gulp.*', 'main-bower-files', 'browser-sync', 'del'],
	lazy:true
});

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

/**
 * List npm dependencies auto loaded from package.json
 */
gulp.task('dependencies', function(){
	console.log("Listing gulp-inject project dependencies");
	console.log(Object.getOwnPropertyNames($));
});

/**
 * serve the dev environment
 */
gulp.task('serve-dev',['bower-copy'],function(){
	serve(config.env.dev);
});

 
/**
 * cleans the dev dir
 */
gulp.task('clean-dev', function(){
	return $.del.sync(['./src/lib/**/*']);
});
 
/**
 *	Copies the dev bower dependencies from the bower_components dir for dependency injection
 * Note that the js / css dependencies are included
 * in the return statement placing the synchronous dependency on the last task executed
 */
gulp.task('bower-copy', ['clean-dev', 'bower-fonts', 'bower-css', 'bower-js']);
 
gulp.task('bower-fonts',function(){
	return gulp.src($.mainBowerFiles())
		.pipe($.filter(['*.eot','*.svg','*.ttf','*.woff','*.woff2']))
		.pipe(gulp.dest('./src/lib/fonts'));
});

gulp.task('bower-js',function(){
	return gulp.src($.mainBowerFiles())
		.pipe($.filter(['*.js']))
		.pipe(gulp.dest('./src/lib/js'));
});

gulp.task('bower-css',function(){
	return gulp.src($.mainBowerFiles())
		.pipe($.filter(['*.css']))
		.pipe(gulp.dest('./src/lib/css'));
});

/**
 * serve the code
 *	code is synchronized  w/ source dir when in dev
 * @param env -- environment configuration from the gulp.config.js
 */
function serve(env){
	$.browserSync.init({
		server:{
			baseDir: env.base
		}
	});
	
	if(env.name === 'dev'){
		gulp.watch([env.base+"/*.html"]).on("change", $.browserSync.reload);
        gulp.watch([env.base+"/app/**/*.js",env.base+"/app/**/*.css"])
            .on("change", function(){$.browserSync.reload();});
	}
}