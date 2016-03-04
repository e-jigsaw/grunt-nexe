# grunt-nexe

Create single executable file by [nexe](https://github.com/crcn/nexe). Nexe allows to convert a Node.JS project into a self-contained executable for Linux or Mac OS X. A Node.JS runtime environment is also included in the package so there are no extra dependencies and there is no need to install Node.JS on the target environment. This project allows us to use nexe within a Grunt task. 

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-nexe --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nexe');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-coffee/tree/grunt-0.3-stable).*

## Nexe task

_Run this task with the `grunt nexe` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### input
Type: `String`
This option required.

#### output
Type: `String`
This option required.

#### nodeTempDir
Type: `String`
Default: `./tmp/nexe`

#### nodeMakeArgs
Type: `Array`
For example `nodeMakeArgs: [ "-j", "4" ]`

#### flags
Type: `Boolean`
Default: `false`

#### version
Type: `String`
Default: `latest`

#### framework
Type: `String`
Default: `node`

### Usage Examples

```
module.exports = (grunt)->
  grunt.initConfig
    coffee:
      compile:
        files:
          'build/index.js': 'index.coffee'
        options:
          bare: true
    nexe:
      input: 'build/index.js'
      output: 'build/bin/test'
      nodeVersion: '5.6.0'

    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-nexe'

    grunt.registerTask 'build', ['coffee', 'nexe']
```

### Contributing

The code for this grunt task is situated in `src/nexe.coffee` and can be built using `grunt b` command. Please refrain from editing the `tasks/nexe.js` as it will be overwritten as soon as `grunt b` is run.

### License

The MIT License (MIT)

Copyright (c) 2014 jigsaw (http://jgs.me)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
