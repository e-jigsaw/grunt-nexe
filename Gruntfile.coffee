module.exports = (grunt)->
  grunt.initConfig
    coffee:
      compile:
        files:
          'tasks/nexe.js': 'src/nexe.coffee'
        options:
          bare: true

    grunt.loadNpmTasks 'grunt-contrib-coffee'

    grunt.registerTask 'b', ['coffee']
