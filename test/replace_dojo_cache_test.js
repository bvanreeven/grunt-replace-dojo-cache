'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.replace_dojo_cache = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  widget: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/widget.js');
    var expected = grunt.file.read('test/expected/widget.js');
    test.equal(actual, expected, 'replace dojo.cache() call by file contents.');

    test.done();
  },
  widget_relative: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/widget_relative.js');
    var expected = grunt.file.read('test/expected/widget_relative.js');
    test.equal(actual, expected, 'support for paths relative to basePath option.');

    test.done();
  },
  widget_sub: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/widget_sub.js');
    var expected = grunt.file.read('test/expected/widget_sub.js');
    test.equal(actual, expected, 'multiple dots in package name.');

    test.done();
  }
};