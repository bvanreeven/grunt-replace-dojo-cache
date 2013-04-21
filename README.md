# grunt-replace-dojo-cache

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-replace-dojo-cache --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-replace-dojo-cache');
```

## The "replace_dojo_cache" task

### Overview
In your project's Gruntfile, add a section named `replace_dojo_cache` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  replace_dojo_cache: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.basePath
Type: `String`
Default value: `'.'`

The base path for files referred from dojo.cache calls. Default is the path Gruntfile.js is in.

### Usage Examples

#### Custom Base Path
In this example, the file `'src/source.js'` is scanned for calls to dojo.cache. Referred files are resolved relative to the base path `'src'`.

```js
grunt.initConfig({
  replace_dojo_cache: {
    options: {
      basePath: 'src'
    },
    files: {
      'dest/replaced.js': ['src/source.js'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
