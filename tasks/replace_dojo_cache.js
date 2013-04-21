/*
 * grunt-replace-dojo-cache
 * https://github.com/bvanreeven/grunt-replace-dojo-cache
 *
 * Copyright (c) 2013 Benny van Reeven
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var path = require('path');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('replace_dojo_cache', 'Replace dojo.cache calls with their file contents.', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      basePath: '.'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      if (f.src.length !== 1) {
        grunt.fail.fatal("Must specify exactly one source file per destination.");
        return;
      }

      if (!grunt.file.exists(f.src[0])) {
        grunt.fail.fatal('Source file "' + f.src[0] + '" not found.');
        return;
      }

      var regex = /dojo\.cache\(['"]([a-zA-Z.]+)['"]\s*,\s*['"]([a-zA-Z.]+)['"]\)/g;
      var src = grunt.file.read(f.src[0]).replace(regex, function (match, packageName, fileName) {

        var cacheFilePath = path.join(options.basePath, packageName.replace(/\./g, "/"), fileName);

        grunt.verbose.writeln("Matched dojo.cache call: " + match);
        grunt.verbose.writeln("Replacing with contents of file " + cacheFilePath);

        if (!grunt.file.exists(cacheFilePath)) {
          grunt.fail.fatal('Cached file "' + cacheFilePath + '" not found.');
          return;
        }

        return JSON.stringify(grunt.file.read(cacheFilePath));
      });

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.verbose.writeln('File "' + f.dest + '" created.');
    });
  });

};