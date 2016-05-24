module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['src/js/**/*.js','js/**/*.js'],
        dest: '../assets/js/build.js',
        options: {
          separator: ';'
        }
      }      
    },
    less: {
       development: {
           options: {
               paths: ["assets/css"]
           },
           files: {"../../web/assets/d00f2586/assets/css/maine.css": "src/custom.less"}
       },
       production: {
           options: {
               paths: ["assets/css"],
               cleancss: true
           },
           files: {"../assets/css/maine.css": "src/custom.less"}
       }
    },
    uglify: {
      js: {
        src: '../assets/js/build.js',
        dest: '../assets/js/build.min.js'
      }     
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['default'],
      },
      styles: {
        files: ['**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','uglify','less']);
};