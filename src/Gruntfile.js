module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
      dist: ['../dist/*']
    },
    coffee: {
      compile: {
        files: {
          '../dist/highbrow.js': 'highbrow.coffee'
        }
      }
    },
    uglify: {
      highbrow: {
        files: {
          '../dist/highbrow.min.js': '../dist/highbrow.js'
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Register tasks
  grunt.registerTask('build', [
    'clean:dist',
    'coffee:compile',
    'uglify:highbrow'
  ]);
};
