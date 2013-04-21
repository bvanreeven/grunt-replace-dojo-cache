/*
 * grunt-replace-dojo-cache
 * https://github.com/bvanreeven/grunt-replace-dojo-cache
 *
 * Copyright (c) 2013 Benny van Reeven
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    replace_dojo_cache: {
      widget: {
        options: {
        },
        files: {
          'tmp/widget.js': ['test/fixtures/widget.js'],
        },
      },
      // too_many_files: {
      //   options: {
      //   },
      //   files: {
      //     'tmp/nope.js': ['test/fixtures/widget.js', 'test/fixtures/fake.js'],
      //   },
      // },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'replace_dojo_cache', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
