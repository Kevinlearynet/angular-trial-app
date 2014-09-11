'use strict';
module.exports = function(grunt) {

    grunt.registerTask('default', 'watch');

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    // bower managed vendor libraries
                    'app/vendor/**/*.js',
                    '!app/vendor/**/*.min.js',
                    // angular app
                    'app/app.js',
                    'app/components/**/*.js',
                    'app/views/**/*.js'
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
                files: [{
                    src: 'dist/build.dev.js',
                    dest: 'dist/build.min.js'
                }]
            }
        },
        less: {
            style: {
                files: {
                    "dist/main.dev.css": "assets/css/main.less"
                }
            }
        },
        concat_css: {
            all: {
                src: ["dist/main.dev.css"],
                dest: "dist/build.dev.css"
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/',
                src: ['build.dev.css'],
                dest: 'dist/',
                ext: '.min.css'
            }
        },
        clean: {
            js: ["dist/main.dev.css", "dist/main.min.css"]
        },
        watch: {
            js: {
                files: [
                    'app/app.js',
                    'app/components/**/*.js',
                    'app/views/**/*.js'
                ],
                tasks: ['concat:js', 'uglify:js'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['assets/css/*.less'],
                tasks: ['less:style', 'concat_css', 'cssmin:minify', 'clean'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-watch');

};