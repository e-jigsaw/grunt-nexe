var ncp, nexe, path;

path = require('path');

ncp = require('ncp');

nexe = require('nexe');

module.exports = function(grunt) {
  return grunt.registerTask('nexe', 'create single executable file by nexe', function() {
    var done, flags, framework, input, jsFlags, nodeMakeArgs, nodeTempDir, option, output, version, _ref;
    done = this.async();
    _ref = grunt.config('nexe'), input = _ref.input, output = _ref.output, version = _ref.version, nodeTempDir = _ref.nodeTempDir, nodeMakeArgs = _ref.nodeMakeArgs, flags = _ref.flags, jsFlags = _ref.jsFlags, framework = _ref.framework;
    option = {
      input: path.join(process.cwd(), input),
      output: path.join(process.cwd(), output),
      nodeVersion: version !== void 0 ? version : 'latest',
      nodeTempDir: nodeTempDir !== void 0 ? nodeTempDir : './tmp/nexe',
      nodeMakeArgs: nodeMakeArgs,
      flags: flags !== void 0 ? flags : false,
      jsFlags: jsFlags !== void 0 ? jsFlags : '--use_strict',
      framework: framework !== void 0 ? framework : 'node'
    };
    return ncp(path.join(process.cwd(), 'node_modules'), path.join(path.dirname(option.input), 'node_modules'), function(err) {
      return nexe.compile(option, function(err) {
        if (err != null) {
          grunt.log.error(err);
        }
        return done();
      });
    });
  });
};
