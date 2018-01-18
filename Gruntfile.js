module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        watch: {
            gruntfile: {
                files: 'GruntFile.js',
                tasks: ['jshint: gruntfile']
            },
            src: {
                files: ['src/**/*.js'],
                tasks: ['default']
            },
            test: {
                files: ['test/**/*.js'],
                tasks: ['default']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'watch']);

};