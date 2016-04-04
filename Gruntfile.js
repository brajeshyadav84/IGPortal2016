/**
 * Created by brajesh on 18/2/16.
 */


module.exports = function(grunt) {
    //// Load grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    //require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            js: {
                // A single entry point for our app
                src: ['app/js/App.js','app/js/**/*.js'],
                // Compile to a single file to add a script tag for in your HTML
                dest: 'dist/js/build.js',
            },
            //css: {
            //    // A single entry point for our app
            //    src: ['app/contents/styles/*.css'],
            //    // Compile to a single file to add a script tag for in your HTML
            //    dest: 'dist/contents/styles/build.css',
            //},
        },

        //uglify: {
        //    dist: {
        //        files: {
        //            "dist/js/build.js": ['app/js/App.js', 'app/js/**/*.js']
        //        }
        //    }
        //},

        copy: {
            all: {
                // This copies all the html and css into the dist/ folder
                expand: true,
                cwd: 'app/',
                src: ['**/*.html', '**/*.css', '**/*.jpg', '**/*.png'],
                dest: 'dist/',
            },
        },
    });

    // Load the npm installed tasks
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // The default tasks to run when you type: grunt
    grunt.registerTask('default', ['browserify', 'copy']);

};
