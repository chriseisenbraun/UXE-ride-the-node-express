module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/application.css': 'sass/application.scss'
        },
        options: {
          sourceComments: "map",
          includePaths: [
            './bower_components/bower-bourbon',
            './bower_components/color-scale',
            './bower_components/type-rhythm-scale'
          ]
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });
  //Dale, I change the default task to watch, so I can just type 'grunt' in terminal, rather than 'grunt watch'
  grunt.registerTask('default', 'watch');
  //grunt.registerTask('default', ['sass']);
};
