'use strict';
const path = require("path");
module.exports = function (grunt) {
  const binDir = path.join(__dirname, "dist", "bin");
  grunt.initConfig({
    uglify: {
      module : {
        files: [
          {
            expand : true,
            src : ['**/*.js', '!dist/**/*.js', '!node_modules/**/*.js', "!Gruntfile.js"],
            dest : binDir
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', [ 'uglify' ]);
};