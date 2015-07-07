module.exports = function(grunt) {
    
    var mozjpeg = require('imagemin-mozjpeg');    

    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['../src/js/header.js', '../src/js/footer.js'],
                dest: '../assets/js/globals.js',
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    '../assets/js/lib/jquery-2.1.4.min.js': ['../src/js/lib/jquery-2.1.4.js']
                }
            },
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    '../assets/js/lib/bootstrap.min.js': ['../src/js/lib/bootstrap.js']
                }
            }
        },
        imagemin: {                          
            dynamic: {                              // Another target 
                files: [{
                    expand: true,                   // Enable dynamic expansion 
                    cwd: '../src/images',           // Src matches are relative to this path 
                    src: ['**/*.{png,jpg,gif}'],    // Actual patterns to match 
                    dest: '../assets/images'        // Destination path prefix 
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['concat', 'uglify']);
};