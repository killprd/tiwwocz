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
           files: {"../../web/assets/2eb07577/assets/css/admin.css": "src/admin.less"},
       },
       production: {
           options: {
               paths: ["assets/css"],
               cleancss: true
           },
           files: {"../assets/css/admin.css": "src/admin.less"},
       }
    },
    uglify: {
      js: {
        src: '../assets/js/build.js',
        dest: '../assets/js/build.min.js'
      }     
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '../../web/assets/2eb07577/assets/css',
          src: ['*.css', '!*.min.css'],
          dest: '../../web/assets/2eb07577/assets/css/min',
          ext: '.min.css'
        }]
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat','uglify','less','cssmin']);
};