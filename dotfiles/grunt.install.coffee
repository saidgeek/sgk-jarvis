'use strict'

chalk = require 'chalk'
config = require './config/config'
# question
question_osx = require './config/question.osx'

module.exports = (grunt) ->

	require('time-grunt') grunt

	grunt.initConfig

		pkg: grunt.file.readJSON '../package.json'
		# Config values
		config: config
		# Bump of the pkg
		bump:
			options:
        commit: true
        commitFiles: ['package.json']
        commitMessage: 'Release v%VERSION%'
        createTag: true
        files: ['package.json']
        push: true
        pushTo: 'origin'
        tagMessage: 'Version %VERSION%'
        tagName: 'v%VERSION%'

    # Questions
    prompt:
    	config: question_osx


	grunt.loadNpmTasks 'grunt-bump'
	grunt.loadNpmTasks 'grunt-prompt'
	grunt.loadNpmTasks 'grunt-contrib-clean'
	grunt.loadNpmTasks 'grunt-template'
	grunt.loadNpmTasks 'grunt-git'
	grunt.loadNpmTasks 'grunt-symlink'
	grunt.loadNpmTasks 'grunt-exec'

	grunt.task.registerTask 'test', ->
		console.log grunt.config.get('config')