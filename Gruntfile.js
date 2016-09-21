
module.exports = function(grunt) {

  grunt.initConfig({
    product: 'Brick',

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: '\n',
        banner: '(function(global) {\n\n',
        footer: '\n}(this));'
      },
      dist: {
        src: grunt.file.readJSON('files.json'),
        dest:  'dist/index.debug.js'
      }
    },

    uglify: {
      options: {},
      build: {
        src: 'dist/index.debug.js',
        dest: 'dist/index.js'
      }
    },

    jshint: {
      all: grunt.file.readJSON('files.json')
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', 'Development build', function() {
    grunt.log.writeln('\033[1;36m'+ grunt.template.date(new Date(), 'yyyy-mm-dd HH:MM:ss') +'\033[0m');
    grunt.task.run('concat');
    grunt.task.run('uglify');
  });

  grunt.registerTask('release', 'Release build', function() {
    grunt.log.writeln('\033[1;36m'+ grunt.template.date(new Date(), 'yyyy-mm-dd HH:MM:ss') +'\033[0m');
    grunt.task.run('concat');
    grunt.task.run('jshint');
    grunt.task.run('uglify');
  });
};
