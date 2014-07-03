var ncp, nexe, path;

path = require('path');

ncp = require('ncp');

nexe = require('nexe');

module.exports = function(grunt) {
  return grunt.registerTask('nexe', 'create single executable file by nexe', function() {
    var done, flags, input, option, output, version, _ref;
    done = this.async();
    _ref = grunt.config('nexe'), input = _ref.input, output = _ref.output, flags = _ref.flags, version = _ref.version;
    option = {
      input: path.join(process.cwd(), input),
      output: path.join(process.cwd(), output),
      flags: flags !== void 0 ? flags : false,
      nodeVersion: version !== void 0 ? version : 'latest',
      nodeTempDir: '/tmp'
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
