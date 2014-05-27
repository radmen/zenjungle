/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      options: {
        banner: '/**\n' +
          ' * <%= pkg.name + " v" + pkg.version + " - " + pkg.description %> \n' +
          ' *\n' + 
          ' * <%= pkg.homepage %>\n' +
          ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
          ' */\n'
      },
      
      dist: {
        src: ['<banner>', 'src/zenjungle.js'],
        dest: 'dist/zenjungle.js'
      },

      mootools: {
        src: ['<banner>', 'src/zenjungle.js', 'src/ports/mootools.js'],
        dest: 'dist/mootools/zenjungle.js'
      }
    },
    
    uglify: {
      
      dist: {
        src: ['src/zenjungle.js'],
        dest: 'dist/zenjungle.min.js'
      },
      
      mootools: {
        src: ['dist/mootools/zenjungle.js'],
        dest: 'dist/mootools/zenjungle.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['concat', 'uglify']);
};
