/**
 * The general settings file of prompt questions in the setup grunt options.
 *
 * Auhtor: @saidGeeK
 */

'use strict';

var apps_choices = require('../templates/.apps.choices.json'),
		editors_choices = require('../templates/.editors.choices.json'),
		zsh_themes_choices = require('../templates/.zsh_themes.choices.json'),
		zsh_plugins_choices = require('../templates/.zsh_plugins.choices.json');

module.exports = {

	options: {
		questions: [

			// computer name (osx)
			{
				type: 'input',
				config: 'config.osx.computer.name',
				default: 'sgk',
				message: 'New name of this computer:',
			},

			// configuration of git
			{
				type: 'input',
				config: 'config.git.name',
				default: 'Andrés Espinace',
				message: 'Author name to git:',
				validate: function(value) {
					if(typeof value === 'undefined' || value === '') {
						return 'Campo requirido!'
					}
					return true;
				}
			},
			{
				type: 'input',
				config: 'config.git.email',
				default: 'atarix.010101@gmail.com',
				message: 'Email to git:',
				validate: function(value){
					if(typeof value === 'undefined' || value === '') {
						return 'Campo requirido!'
					}
					return true;
				}
			},
			// Default editor
			{
				choices: editors_choices,
				type: 'list',
				config: 'config.editor',
				message: 'which will be the default editor?'
			},

			// OSX properties

			// ZSH
			// Theme oh-my-zsh
			{
				choices: zsh_themes_choices,
				type: 'list',
				config: 'config.zsh.oh_my_zsh_theme',
				message: 'whisch will be the default OH-MY-ZSH Theme?'
			},
			// plugins oh-my-zsh
			{
				choices: zsh_plugins_choices,
				type: 'checkbox',
				config: 'config.zsh.oh_my_zsh_plugins',
				message: 'whisch will be the default OH-MY-ZSH plugins?',
				filter: function (value) {
					return value.join(' ');
				}
			},
			
			// Apps to install in system
			{
				choices: apps_choices,
				type: 'checkbox',
				config: 'config.apps',
				message: 'which apps are installing the system?' 
			}
			
		]
	}

};