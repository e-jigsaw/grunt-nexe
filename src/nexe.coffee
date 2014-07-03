path = require 'path'
ncp = require 'ncp'
nexe = require 'nexe'

module.exports = (grunt)->
  grunt.registerTask 'nexe', 'create single executable file by nexe', ->
    done = @async()
    {input, output, flags, version} = grunt.config('nexe')
    option =
      input: path.join(process.cwd(), input)
      output: path.join(process.cwd(), output)
      flags: if flags isnt undefined then flags else false
      nodeVersion: if version isnt undefined then version else 'latest'
      nodeTempDir: '/tmp'
    ncp path.join(process.cwd(), 'node_modules'), path.join(path.dirname(option.input), 'node_modules'), (err)->
      nexe.compile option, (err)->
        grunt.log.error err if err?
        done()
