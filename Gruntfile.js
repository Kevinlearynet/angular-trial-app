'use strict';
module.exports = function ( grunt ) {

	grunt.registerTask( 'default', 'watch' );

	grunt.initConfig( {
		concat: {
			js: {
				options: {
					separator: ';',
					process: function ( src, filepath ) {
						return '\n\n//############[  ' + filepath + '  ]############\n\n' + src;
					}
				},
				src: [
					// bower managed vendor libraries
					'scripts/vendor/angular/angular.js',
					'scripts/vendor/angular-loader/angular-loader.js',
					'scripts/vendor/angular-ui-router/release/angular-ui-router.js',
					'scripts/vendor/moment/moment.js',
					'scripts/vendor/angular-promise-tracker/promise-tracker.js',
					'scripts/vendor/angular-shims-placeholder/dist/angular-shims-placeholder.js',

					// angular app
					'scripts/app.js',
					'scripts/controllers/**/*.js',
					'scripts/directives/**/*.js',
					'scripts/services/**/*.js',

					'scripts/vendor/CSS-Filters-Polyfill/lib/cssParser.js',
					'scripts/vendor/CSS-Filters-Polyfill/lib/css-filters-polyfill.js'
				],
				dest: 'dist/build.dev.js'
			}
		},
		uglify: {
			options: {
				report: 'min',
				mangle: true
			},
			js: {
				files: [ {
					src: 'dist/build.dev.js',
					dest: 'dist/build.min.js'
				} ]
			}
		},
		less: {
			style: {
				files: {
					"dist/main.dev.css": "styles/less/main.less"
				}
			}
		},
		concat_css: {
			all: {
				src: [ "dist/main.dev.css" ],
				dest: "dist/build.dev.css"
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'dist/',
				src: [ 'build.dev.css' ],
				dest: 'dist/',
				ext: '.min.css'
			}
		},
		clean: {
			js: [ "dist/main.dev.css", "dist/main.min.css" ]
		},
		watch: {
			js: {
				files: [
					'scripts/app.js',
					'scripts/controllers/*.js',
					'scripts/directives/*.js',
					'scripts/filters/*.js',
					'scripts/filters/*.js',
					'scripts/services/*.js'
				],
				tasks: [ 'concat:js', 'uglify:js' ],
				options: {
					livereload: true
				}
			},
			css: {
				files: [ 'styles/less/*.less' ],
				tasks: [ 'less:style', 'concat_css', 'cssmin:minify', 'clean' ],
				options: {
					livereload: true
				}
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-concat-css' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

};