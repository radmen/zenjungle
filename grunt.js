/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: '<json:package.json>',
    
    meta: {
      banner: '/**\n' +
        ' * <%= pkg.name + " - " + pkg.description %> \n' +
        ' *\n' + 
        ' * <%= pkg.homepage %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' */'
    },
    
    concat: {
      
      dist: {
        src: ['<banner>', 'src/zenjungle.js'],
        dest: 'dist/zenjungle.js'
      },

      mootools: {
        src: ['<banner>', 'src/zenjungle.js', 'src/ports/mootools.js'],
        dest: 'dist/mootools/zenjungle.js'
      }
    },
    
    min: {
      
      dist: {
        src: ['src/zenjungle.js'],
        dest: 'dist/zenjungle.min.js'
      },
      
      mootools: {
        src: ['dist/mootools/zenjungle.js'],
        dest: 'dist/mootools/zenjungle.min.js'
      }
    }
  })
  
  grunt.registerTask('default', 'concat min');
};
