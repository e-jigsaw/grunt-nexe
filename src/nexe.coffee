path = require 'path'
ncp = require 'ncp'
nexe = require 'nexe'

module.exports = (grunt)->
  grunt.registerTask 'nexe', 'create single executable file by nexe', ->
    done = @async()
    {input, output, version, nodeTempDir, nodeMakeArgs, flags, jsFlags, framework } = grunt.config('nexe')
    option =
      input: path.join(process.cwd(), input)
      output: path.join(process.cwd(), output),
      nodeVersion: if version isnt undefined then version else 'latest'
      nodeTempDir: if nodeTempDir isnt undefined then nodeTempDir else './tmp/nexe'
      nodeMakeArgs: nodeMakeArgs
      flags: if flags isnt undefined then flags else false
      jsFlags: if jsFlags isnt undefined then jsFlags else '--use_strict',
      framework: if framework isnt undefined then framework else 'node'
    ncp path.join(process.cwd(), 'node_modules'), path.join(path.dirname(option.input), 'node_modules'), (err)->
      nexe.compile option, (err)->
        grunt.log.error err if err?
        done()
