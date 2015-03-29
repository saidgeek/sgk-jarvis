'use strict'

editors_choices = '../templates/.choices_editor'

module.exports = [

	# git
	type: 'input'
	config: 'config.git.name'
	default: 'Andrés Espinace'
	message: 'Author name to git:'
	validate: (value) ->
		if typeof value is 'undefined' or value is ''
			'Campo requirido!'
		true
	,
	type: 'input'
	config: 'config.git.email'
	default: 'atarix.010101@gmail.com'
	message: 'Email to git:'
	validate: (value) ->
		if typeof value is 'undefined' or value is ''
			'Campo requirido!'
		true
	,
	# Default editor
	choices: editors_choices
	type: 'list'
	config: 'config.editor'
	message: 'which will be the default editor?'

]