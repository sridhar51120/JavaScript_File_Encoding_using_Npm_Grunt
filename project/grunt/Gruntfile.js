module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n/*next file*/\n\n'  
            },
            dist: {
                src: ['../scripts/hello.js', '../scripts/main.js'],
                dest: 'scripts/built.js'
            }
        },

        uglify: {
            build: {
                files: {
                    '../../htdocs/js/main.min.js': ['../scripts/built.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('js', ['uglify','concat']);
};