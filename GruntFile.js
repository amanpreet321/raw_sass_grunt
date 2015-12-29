module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task 
    dist: {                            // Target 
      options: {                       // Target options 
        style: 'expanded'
      },
      files: {                         // Dictionary of files 
        'css/master.css': 'scss/master.scss'
      }
    }
  },
      watch: {
  scripts: {
    files: ['scss/**/*.scss'],
    tasks: ['sass'],
    
  },
},
      browserSync: {
    bsFiles: {
        src : 'css/*.css'
    },
    options: {
        server: {
            baseDir: "./"
        }
    }
}
  });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch', 'browserSync']);

};